module.exports = {
  webpack: function (config) {
    config.module.rules.puah({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  }
}