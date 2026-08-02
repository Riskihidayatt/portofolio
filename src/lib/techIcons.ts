export const getTechIconUrl = (tech: string): string | null => {
  const t = tech.toLowerCase().trim();

  // Programming Languages
  if (t === 'javascript' || t === 'js') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg';
  if (t === 'typescript' || t === 'ts') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg';
  if (t === 'php') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg';
  if (t === 'go' || t === 'golang') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg';
  if (t === 'java') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg';
  if (t === 'python') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg';
  if (t === 'kotlin') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg';
  if (t === 'swift') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg';
  if (t === 'c#' || t === 'csharp') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg';
  if (t === 'c++' || t === 'cpp') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg';
  if (t === 'dart') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg';
  if (t === 'rust') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg';

  // Frameworks & Libraries (React must come before Java check)
  if (t === 'react native' || t === 'react-native') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg';
  if (t === 'react' || t === 'react.js' || t === 'reactjs') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg';
  if (t === 'next.js' || t === 'nextjs') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg';
  if (t === 'node.js' || t === 'nodejs' || t === 'node') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg';
  if (t.includes('spring')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg';
  if (t.includes('codeigniter')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg';
  if (t === 'laravel') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg';
  if (t === 'vue' || t === 'vue.js' || t === 'vuejs') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg';
  if (t === 'angular') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg';
  if (t === 'flutter') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg';
  if (t === 'express' || t === 'express.js') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg';

  // Mobile
  if (t === 'android') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg';

  // Databases
  if (t.includes('postgresql') || t === 'postgres') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg';
  if (t.includes('mysql')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg';
  if (t.includes('firebase')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg';
  if (t === 'mongodb') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg';
  if (t === 'redis') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg';
  if (t === 'sqlite') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg';

  // Tools & DevOps
  if (t === 'docker') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg';
  if (t === 'git') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg';
  if (t === 'linux') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg';
  if (t === 'postman') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg';
  if (t === 'swagger' || t === 'openapi') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg';
  if (t === 'kubernetes' || t === 'k8s') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg';
  if (t === 'nginx') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg';
  if (t === 'vite') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg';
  if (t === 'webpack') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg';
  if (t === 'github') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';
  if (t === 'figma') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg';
  if (t === 'aws') return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';

  return null;
};
