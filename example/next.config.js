const moduleConfig = {
  test: /\.(png|jpe?g|gif|jp2|webp)$/,
  use: [
    {
      loader: 'image-trace-loader'
    }
  ]
} 

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push(moduleConfig)
    return config
  }
}