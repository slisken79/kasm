/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Youness Repo',
    description: 'My Kasm workspaces.',
    icon: 'https://img.freepik.com/vector-premium/logotipo-letra-ye_579179-1258.jpg',
    listUrl: 'https://slisken79.github.io/kasm/',
    contactUrl: 'https://github.com/slisken79/kasm/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
