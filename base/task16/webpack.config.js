var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, './js'),
	entry: {
		app: './app.js'
	},
	output: {
		path: path.resolve(__dirname, './js'),
		filename: 'bundle.js'
	}
}