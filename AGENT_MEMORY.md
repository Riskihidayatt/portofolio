# AGENT MEMORY — Riski Hidayat Portfolio

> File ini WAJIB dibaca AI agent di awal sesi kerja, dan WAJIB diupdate di akhir sesi setelah fitur selesai+ditest.
> Terakhir diupdate: 2026-10-12 oleh sesi: alur deploy dua branch (dev → Preview, master → Production)

## 1. Ringkasan Project
- Deskripsi singkat: website portofolio satu halaman milik Riski Hidayat (Fullstack Developer, backend-focused). Live di https://portofolio.rtech.studio.
- Stack: Next.js 16 (App Router, `output: 'export'`), React 19, TypeScript (strict), Tailwind CSS v4, lucide-react. Tidak ada backend/database.
- Struktur repo:
  - `src/app/` — `layout.tsx` (metadata SEO, font, script tema), `page.tsx` (susunan section), `globals.css` (token warna + animasi).
  - `src/features/portfolio/components/` — section halaman (Hero, About, Experience, Projects + ProjectModal, Skills, Credentials, Contact).
  - `src/components/layout/` (Navbar, ThemeToggle, Footer), `src/components/ui/` (Section, Reveal, Modal, TechChip, CopyEmailButton).
  - `src/data/portfolio.ts` — SEMUA konten (sumber: CV user). `src/data/assets/` — gambar WebP.
  - `public/` — CV PDF, favicon, `icons/tech/*.svg` (devicon, self-hosted).
  - `tests/e2e/` — Playwright.

## 2. Keputusan Arsitektur (jangan diubah tanpa diskusi eksplisit)
- Static export ke `dist/` (`distDir: 'dist'`) — alasan: situs statis, bisa di-host di mana saja tanpa Node server, perintah build & folder output sama seperti versi Vite sebelumnya.
- Section statis = Server Component; `'use client'` hanya untuk yang interaktif (Navbar, ThemeToggle, Reveal, Modal, ProjectsSection, CredentialsSection, CopyEmailButton) — alasan: JS di browser sekecil mungkin, konten sudah ada di HTML.
- Tidak memakai library animasi (`motion` sudah dihapus). Animasi = CSS (`[data-reveal]`, `.animate-*` di globals.css) + IntersectionObserver di `Reveal.tsx` — alasan: bundle lebih kecil, hero tampil sebelum JS jalan.
- Foto hero memakai animasi transform-only (`animate-rise`), BUKAN fade dari opacity 0 — alasan: foto adalah elemen LCP; opacity 0 menunda LCP.
- Gambar dioptimasi manual ke WebP (tidak ada image optimizer di static export; `images.unoptimized: true`). Kartu proyek pakai `*-thumb.webp` (≤800px), modal pakai versi ≤1600px.
- Font self-hosted via `@fontsource` (bukan Google Fonts CDN / next/font) — build tidak butuh akses internet.
- Tema: default gelap. Script inline di `<head>` (`src/lib/theme.ts`) memasang class sebelum paint; key localStorage `vite-ui-theme` dipertahankan agar preferensi pengunjung lama tetap terbaca.

## 3. Konvensi yang harus diikuti
- Icon library FE: `lucide-react` — jangan pakai emoji di UI. Logo teknologi: tambah SVG ke `public/icons/tech/` + mapping di `src/lib/techIcons.ts`; ikon yang gelap tambahkan ke `DARK_ICONS` agar di-invert di dark mode.
- Warna pakai token Tailwind (`bg-background`, `text-primary`, `border-border`, dst.), bukan hex langsung.
- Konten baru → `src/data/portfolio.ts`, tipe di `src/types/index.ts`.
- Teks UI berbahasa Inggris; komunikasi dengan user berbahasa Indonesia.
- Branch & deploy (Vercel, auto-deploy dari GitHub):
  - `dev` → Vercel **Preview**. SEMUA perubahan di-push ke `dev` dulu, lalu kirim link preview ke user.
  - `master` → Vercel **Production** (situs live). Gabungkan `dev` ke `master` HANYA setelah user bilang oke.
  - Jangan push langsung ke `master`; jangan buat branch lain tanpa diminta. Tidak ada branch `main`.

## 4. Status Fitur
| Fitur | Status | Catatan |
|---|---|---|
| Redesign UI + konten sesuai CV | Done | Judul "Fullstack Developer" (backend-focused) |
| Dark mode default + toggle | Done, tested (e2e) | |
| Scroll reveal dua arah | Done, tested (e2e) | Masuk dari bawah saat scroll turun, dari atas saat scroll naik |
| Migrasi ke Next.js static export | Done, tested | 19 e2e pass (desktop + mobile), tsc bersih |
| Marquee tech stack di Skills | Done, tested (e2e) | Dibuat di sesi lain (commit b86fa73), di-port ke Next.js; daftar di `techStack` pada portfolio.ts, semua item wajib punya ikon lokal |

Hasil ukur (Slow 4G + CPU 4×, mobile): Vite lama FCP 2316 ms / LCP 2968 ms → Next.js FCP ~760 ms / LCP ~860 ms. Total transfer setelah scroll penuh 3,2 MB → ~0,44 MB.

## 5. Yang sedang dikerjakan sesi ini
- Tidak ada pekerjaan menggantung.

## 6. Known issues / hutang teknis
- Nama file CV masih `Riski-Hidayat_Software-Developer_CV.pdf` (isi CV versi "Software Developer"). — prioritas: rendah
- Tidak tahu pasti platform hosting live site; pastikan pengaturan deploy membangun dengan `npm run build` dan menyajikan `dist/`.

## 7. Hal yang perlu diketahui agent berikutnya sebelum lanjut
- Ada lebih dari satu sesi Claude yang push ke repo ini. Selalu `git fetch origin` dan gabungkan `origin/dev` sebelum push.
- Link preview branch `dev`: lihat status Vercel di commit GitHub (`gh api repos/Riskihidayatt/portofolio/commits/<sha>/status`) — jangan polling berulang-ulang (pernah kena GitHub secondary rate limit).
- Cara test: `npm run lint && npm run build && npm run test:e2e`. Di sandbox Claude Code tanpa download browser, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE=/opt/pw-browsers/chromium`.
- Screenshot full-page akan terlihat "kosong" di bawah hero setelah scroll balik ke atas — itu disengaja (konten di luar layar disembunyikan agar bisa beranimasi lagi). Ambil screenshot per viewport untuk cek visual.
- Tidak ada env var / secret yang dibutuhkan.
