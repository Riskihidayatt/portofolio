import { test, expect, type Page } from '@playwright/test';

const collectErrors = (page: Page) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  return errors;
};

const scrollTo = (page: Page, y: number) => page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);

test('page is pre-rendered: content is in the HTML and readable without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Riski Hidayat');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Fullstack Developer');
  for (const id of ['about', 'experience', 'projects', 'skills', 'credentials', 'contact']) {
    await expect(page.locator(`section#${id}`)).toHaveCount(1);
  }
  await expect(page.getByText('PT. Enigma Cipta Humanika').first()).toBeAttached();
  // The <noscript> fallback keeps scroll-reveal content visible.
  await expect(page.locator('#contact h2')).toBeVisible();
  await context.close();
});

test('has SEO metadata', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Riski Hidayat — Fullstack Developer');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Fullstack Developer/);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Riski Hidayat/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://portofolio.rtech.studio');
});

test('defaults to dark mode and the toggle switches to light, remembered on reload', async ({ page }) => {
  const errors = collectErrors(page);
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  const html = page.locator('html');
  await expect(html).toHaveClass(/dark/);
  await page.getByRole('button', { name: 'Toggle light/dark mode' }).click();
  await expect(html).toHaveClass(/light/);
  await page.reload();
  await expect(html).toHaveClass(/light/);
  await page.getByRole('button', { name: 'Toggle light/dark mode' }).click();
  await expect(html).toHaveClass(/dark/);
  expect(errors).toEqual([]);
});

test('project case study opens, pages through images and closes with Escape', async ({ page }) => {
  await page.goto('/');
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'Open details for PEMIRA Polinela' }).click();
  const dialog = page.getByRole('dialog', { name: 'PEMIRA Polinela' });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('img')).toHaveAttribute('alt', /image 1 of 5/);
  await page.keyboard.press('ArrowRight');
  await expect(dialog.getByRole('img')).toHaveAttribute('alt', /image 2 of 5/);
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});

test('live site links point to the deployed projects', async ({ page }) => {
  await page.goto('/');
  const links = page.locator('#projects a', { hasText: 'Live site' });
  await expect(links).toHaveCount(2);
  await expect(links.nth(0)).toHaveAttribute('href', 'https://aitec-lampung.polinela.ac.id/');
  await expect(links.nth(1)).toHaveAttribute('href', 'https://kuliah.polinela.ac.id/');
});

test('certificate image opens in a dialog', async ({ page }) => {
  await page.goto('/');
  await page.locator('#credentials').scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'View Fullstack Developer Bootcamp certificate' }).click();
  const dialog = page.getByRole('dialog', { name: 'Fullstack Developer Bootcamp' });
  await expect(dialog.getByRole('img')).toBeVisible();
  await dialog.getByRole('button', { name: 'Close' }).click();
  await expect(dialog).toBeHidden();
});

test('scroll reveal enters from below going down and from above going up', async ({ page }) => {
  await page.goto('/');
  const target = page.locator('#skills [data-reveal]').first();
  await expect(target).toHaveAttribute('data-reveal', 'below');

  const top = await target.evaluate((el) => el.getBoundingClientRect().top + window.scrollY);
  const viewport = page.viewportSize()!.height;
  // Scroll down until it is in view.
  for (let y = 0; y <= top - viewport / 2; y += 300) await scrollTo(page, y);
  await scrollTo(page, top - viewport / 2);
  await expect(target).toHaveAttribute('data-reveal', 'visible');
  // Scroll past it: it parks above the viewport.
  for (let y = top - viewport / 2; y <= top + viewport * 2; y += 300) await scrollTo(page, y);
  await expect(target).toHaveAttribute('data-reveal', 'above');
  // Scroll back up: it re-enters from above.
  for (let y = top + viewport * 2; y >= top - viewport / 2; y -= 300) await scrollTo(page, y);
  await expect(target).toHaveAttribute('data-reveal', 'visible');
});

test('layout has no horizontal overflow and the resume is downloadable', async ({ page, request }) => {
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
  const cv = await request.get('/Riski-Hidayat_Software-Developer_CV.pdf');
  expect(cv.ok()).toBeTruthy();
  expect(cv.headers()['content-type']).toContain('pdf');
});

test('mobile menu navigates to a section', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile-only menu');
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('navigation', { name: 'Mobile' }).getByRole('link', { name: 'Projects' }).click();
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
  await expect(page.locator('#projects h2')).toBeInViewport();
});
