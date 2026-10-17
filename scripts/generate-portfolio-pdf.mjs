// Renders the /portfolio-pdf page of the static build to A4 PDFs in public/.
// Usage: npm run build && npm run pdf
// Set PLAYWRIGHT_CHROMIUM_EXECUTABLE to use a pre-installed Chromium instead of `npx playwright install chromium`.
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { chromium } from '@playwright/test';

const PORT = 4175;
const BASE = `http://localhost:${PORT}`;
const OUTPUTS = [
  { theme: 'dark', file: 'public/Riski-Hidayat_Portfolio.pdf' },
  { theme: 'light', file: 'public/Riski-Hidayat_Portfolio-Light.pdf' },
];

if (!existsSync('dist/portfolio-pdf.html') && !existsSync('dist/portfolio-pdf/index.html')) {
  console.error('dist/ has no /portfolio-pdf page. Run `npm run build` first.');
  process.exit(1);
}

const server = spawn('npx', ['serve', 'dist', '--listen', String(PORT), '--no-clipboard'], { stdio: 'ignore' });
const stopServer = () => server.kill();

async function waitForServer() {
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(BASE)).ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error('Static server did not start');
}

try {
  await waitForServer();
  const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || undefined });
  for (const { theme, file } of OUTPUTS) {
    const context = await browser.newContext();
    // The theme init script in the root layout reads this key before first paint.
    await context.addInitScript((t) => localStorage.setItem('vite-ui-theme', t), theme);
    const page = await context.newPage();
    await page.goto(`${BASE}/portfolio-pdf`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    // Fail if any image (screenshots, certificates, icons) did not load.
    const broken = await page.$$eval('.pdf-document img', (imgs) =>
      Promise.all(
        imgs.map(async (img) => {
          await img.decode().catch(() => undefined);
          return img.naturalWidth > 0 ? null : img.getAttribute('src');
        }),
      ).then((r) => r.filter(Boolean)),
    );
    if (broken.length) throw new Error(`Images failed to load (${theme}): ${broken.join(', ')}`);

    // Downscale raster images to ~2.5x their printed size so the PDF stays small enough to email.
    await page.$$eval('.pdf-document img', (imgs) =>
      Promise.all(
        imgs.map(async (img) => {
          const src = img.getAttribute('src') || '';
          if (src.endsWith('.svg')) return;
          const scale = 2.5;
          const width = Math.round(img.clientWidth * scale);
          if (!width || width >= img.naturalWidth) return;
          const height = Math.round((img.naturalHeight / img.naturalWidth) * width);
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, width, height);
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);
          img.removeAttribute('srcset');
          img.src = canvas.toDataURL('image/jpeg', 0.85);
          await img.decode();
        }),
      ),
    );
    await page.emulateMedia({ media: 'print' });

    // Every page has a fixed A4 box; fail loudly instead of silently clipping content.
    const overflowing = await page.$$eval('.pdf-page', (pages) =>
      pages
        .map((p, i) => ({ page: i + 1, over: p.scrollHeight - p.clientHeight }))
        .filter((p) => p.over > 1),
    );
    if (overflowing.length) {
      throw new Error(`Content overflows its A4 page (${theme}): ${JSON.stringify(overflowing)}`);
    }

    await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true });
    const pages = await page.$$eval('.pdf-page', (p) => p.length);
    console.log(`✓ ${file} (${theme}, ${pages} pages)`);
    await context.close();
  }
  await browser.close();
} finally {
  stopServer();
}
