import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to dist/, deployable on any static host.
  output: 'export',
  distDir: 'dist',
  images: {
    // No image server in a static export; images are pre-optimised to WebP in src/data/assets.
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
