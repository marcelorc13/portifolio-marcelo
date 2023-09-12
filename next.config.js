/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: 'static/files',
            name: 'marcelo-cv.pdf',
          },
        },
      });
      return config;
    },
  };
  
