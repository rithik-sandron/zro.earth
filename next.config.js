module.exports = {
  images: {
    formats: ['image/webp'],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  reactStrictMode: true,
}
