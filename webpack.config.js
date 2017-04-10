var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  return {
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
      rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: '',
          name: "[path][name].[ext]"
        }
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {
                modules: false
              }]
            ],
            plugins: ['syntax-dynamic-import']
          }
        }]
      }],
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        // split up your app code from the libraries, must match entry name
        // assumes your vendor imports exist in the node_modules directory
        name: 'vendor',
        minChunks: function (module) {
          return module.context && module.context.indexOf('node_modules') !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        // CommonChunksPlugin will now extract all the common modules from vendor and app bundles
        // If there are no common modules vendor and app, manifest will only have runtime code
        name: 'manifest'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index-template.html'
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
    // devtool: process.env.NODE_ENV ? 'source-map' : 'eval',
    // cache: true,
    // entry: './app/app.js',
    // output: {
    //   path: path.resolve(__dirname, 'dist'),
    //   filename: '[name].js',
    //   sourceMapFilename: '[name].map',
    //   chunkFilename: '[id].chunk.js'
    // },
    // module: {
    //   rules: [{

    //     use: [{
    //       test: /\.js$/,
    //       exclude: /(node_modules)/,
    //       loader: "babel-loader",
    //       options: {
    //         presets: ["es2015"]
    //       }
    //     }]
    //   }]
    // },
    // resolve: {
    //   modules: [
    //     path.resolve(__dirname, "app"),
    //     'node_modules'
    //   ]
    // },
    // devServer: {
    //   contentBase: path.join(__dirname, 'dist'),
    //   compress: true,
    //   historyApiFallback: true,
    //   //hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    // },
    // plugins: [
    //   new webpack.optimize.CommonsChunkPlugin({
    //     name: ['app', 'vendor'],
    //     minChunks: Infinity
    //   }),
    //   new CopyWebpackPlugin([{
    //     context: path.resolve(__dirname, 'app'),
    //     from: '**/*.{html,css}'
    //   }]),
    //   new webpack.NoErrorsPlugin()
    // ]
  }
}