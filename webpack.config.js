var webpack = require('webpack');

module.exports = {
  entry: {
  app: ['webpack/hot/dev-server', './app/entry.js'],
},

output: {
  path: './public/built',
  filename: 'bundle.js',
  publicPath: 'http://localhost:8080/built/'
},

devServer: {
  contentBase: './public',
  publicPath: 'http://localhost:8080/built/'
},

module: {
 loaders: [
   {
     test: /\.js$/,
     loader: 'babel-loader',
     exclude: /node_modules/,
     query: {
       presets:['es2015','react']
     }
   },
   {
     test: /\.scss$/,
     loader: 'style!css!sass'
   }
 ]
},

 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
}
