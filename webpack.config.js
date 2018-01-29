const path = require('path');

module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				loaders: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: ['style-loader', 'css-loader', 'sass-loader'],
				test: /\.s?css$/
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public')
	},
	devtool: 'cheap-module-eval-source-map'
};
