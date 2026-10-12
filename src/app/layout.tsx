import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import './globals.css';
import { themeInitScript } from '../lib/theme';

const siteUrl = 'https://portofolio.rtech.studio';
const title = 'Riski Hidayat — Fullstack Developer';
const description =
  'Riski Hidayat — backend-focused Fullstack Developer building web apps with Go, Java Spring Boot, Node.js and React. Based in Lampung, Indonesia, open to relocation.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: 'Riski Hidayat' }],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description: 'Backend-focused Fullstack Developer · Golang · Java Spring Boot · React · REST API',
  },
  twitter: { card: 'summary' },
};

export const viewport: Viewport = {
  themeColor: '#09090b',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The theme script adds the theme class before hydration, so <html> attributes differ by design.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
