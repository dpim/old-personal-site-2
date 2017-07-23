const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  module: {
   loaders: [
			{
				test: /\.js$/,
				loader: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
  },

  plugins: process.argv.indexOf('-p') === -1 ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};