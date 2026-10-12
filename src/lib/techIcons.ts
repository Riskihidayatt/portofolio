// Self-hosted devicon SVGs (public/icons/tech) — no third-party CDN request on page load.
const ICONS: Record<string, string> = {
  javascript: 'javascript',
  js: 'javascript',
  typescript: 'typescript',
  ts: 'typescript',
  php: 'php',
  go: 'go',
  golang: 'go',
  java: 'java',
  react: 'react',
  'react.js': 'react',
  reactjs: 'react',
  'react native': 'react',
  'react-native': 'react',
  'react + ts': 'react',
  redux: 'redux',
  'node.js': 'nodejs',
  nodejs: 'nodejs',
  node: 'nodejs',
  laravel: 'laravel',
  android: 'android',
  postgresql: 'postgresql',
  postgres: 'postgresql',
  mysql: 'mysql',
  prisma: 'prisma',
  docker: 'docker',
  git: 'git',
  linux: 'linux',
  postman: 'postman',
  swagger: 'swagger',
  openapi: 'swagger',
};

export const getTechIconUrl = (tech: string): string | null => {
  const t = tech.toLowerCase().trim();
  let slug = ICONS[t];
  if (!slug && t.includes('spring')) slug = 'spring';
  if (!slug && t.includes('codeigniter')) slug = 'codeigniter';
  if (!slug && t.includes('firebase')) slug = 'firebase';
  if (!slug && t.includes('mysql')) slug = 'mysql';
  return slug ? `/icons/tech/${slug}.svg` : null;
};
