/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    swcMinify: true,
    basePath: '/projects/react-components',
    webpack: (webpack) => {
        webpack.module.rules = [
            ...webpack.module.rules,
            {
                test: /\.md$/,
                use: 'raw-loader'
            }
        ];
        webpack.resolve.fallback = { ...webpack.resolve.fallback, fs: false };
        return webpack;
    }
    // experimental: {
    //     // Required:
    //     appDir: true,
    // },
};

module.exports = nextConfig;
