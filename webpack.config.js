var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: process.env.NODE_ENV ? 'source-map' : 'eval',
  cache: true,
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [{

      use: [
         {
           test: /\.js$/,
           exclude: /(node_modules)/,
           loader: "babel-loader",
           options: {
               presets: ["es2015"]
           } 
         }
    ]
    }]
  },
  resolve: {
    modules: [
       path.resolve(__dirname, "app"),
      'node_modules'
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, 
    historyApiFallback: true, 
    //hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor'],
      minChunks: Infinity
    }),
    new CopyWebpackPlugin([{
      context: path.resolve(__dirname, 'app'),
      from: '**/*.{html,css}'
    }]),
    new webpack.NoErrorsPlugin()
  ]
}
