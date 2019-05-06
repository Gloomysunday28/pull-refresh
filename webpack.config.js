const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, arg) => ({
  mode: env,
  entry: './src/index.js',
  devtool: env === 'development' ? 'cheap-module-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'pullRefresh.js',
    library: 'PullRefresh',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  devServer: {
    inline: true,
    port: 3000,
    host: '192.168.1.169',
    hot: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_mudules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
      filename: path.resolve(__dirname, './dist/index.html'),
      js: ['pullRefresh.js'],
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})