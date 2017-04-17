var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (env) {
  return {
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval',
    cache: true,
    context: path.resolve(__dirname, 'app'),
    entry: {
      app: './app.js',
      vendor: ['angular', 'angular-route']
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            outputPath: '',
            name: '[path][name].[ext]'
          }
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    'es2015',
                    {
                      modules: false
                    }
                  ]
                ],
                plugins: ['syntax-dynamic-import']
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('app.css'),
      new webpack.optimize.CommonsChunkPlugin({
        // split up your app code from the libraries, must match entry name
        // assumes your vendor imports exist in the node_modules directory
        name: 'vendor',
        minChunks: function (module) {
          return (
            module.context && module.context.indexOf('node_modules') !== -1
          )
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        // CommonChunksPlugin will now extract all the common modules from vendor and app bundles
        // If there are no common modules vendor and app, manifest will only have runtime code
        name: 'manifest'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        favicon: 'favicon.ico',
        template: 'index-template.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'home/home.html',
        template: 'home/home.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'view1/view1.html',
        template: 'view1/view1.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'view2/view2.html',
        template: 'view2/view2.html'
      })
    ]
  }
}
