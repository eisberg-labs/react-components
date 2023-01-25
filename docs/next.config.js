/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  basePath: '/projects/react-components',
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    domains: ['localhost', 'amarjanica.com', 'www.amarjanica.com', 'pixabay.com', 'cdn.pixabay.com'],
  },
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (webpack) => {
    webpack.module.rules = [
      ...webpack.module.rules,
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ];
    webpack.resolve.fallback = {...webpack.resolve.fallback, fs: false};
    return webpack;
  }
};

module.exports = nextConfig;
