const nextSafe = require('next-safe')
const nextTranslate = require('next-translate')
const webpack = require('webpack')

module.exports = {
  ...nextTranslate(),
  output: 'export',
  // images: {
  //   unoptimized: true,
  // },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    })

    config.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      process: false,
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      fs: false,
      vm: false,
    }

    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^crypto$/,
        contextRegExp: /node_modules/,
      }),
    )

    nextSafe({
      isDev: !isServer, // Enable different CSP for dev and prod
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ['\'self\''],
          scriptSrc: ['\'self\'', '\'unsafe-inline\''],
          objectSrc: ['\'none\''],
        },
      },
    })

    return config
  },
}
