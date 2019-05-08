const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, arg) => {
  const webpackConfig = {
    mode: env,
    entry: {
      app: './src/index.js',
      m: './src/src.js'
    },
    devtool: env === 'development' ? 'cheap-module-eval-source-map' : false,
    output: {
      path: path.resolve(__dirname, './lib/'),
      filename: '[name].js',
      // chunkFilename: '[name].[chunkhash].js', // 代码切割后创建的文件 () => import()
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
      contentBase: path.join(__dirname, 'public'),
      inline: true,
      port: 3001,
      host: 'localhost',
      hot: true
    }
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      title: '下拉加载',
      template: './public/index.ejs',
      filename: path.resolve(__dirname, './lib/index.html'),
      js: ['app.js'],
      inject: false,
    }))
  }
  return webpackConfig
}