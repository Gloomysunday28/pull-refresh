const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, arg) => {
  const webpackConfig = {
    mode: env,
    entry: './src/index.js',
    devtool: env === 'development' ? 'cheap-module-eval-source-map' : false,
    output: {
      path: path.resolve(__dirname, './lib/'),
      filename: 'index.js',
      library: 'PullRefresh',
      libraryTarget: 'umd',
      libraryExport: 'default'
    },
   
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_mudules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }

  if (env === 'development') {
    webpackConfig.devServer = {
      inline: true,
      port: 3000,
      host: '192.168.1.169',
      hot: true
    }
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      title: '下拉加载',
      template: './index.ejs',
      filename: path.resolve(__dirname, './lib/index.html'),
      js: ['index.js'],
      inject: false,
    }))
  }
  return webpackConfig
}