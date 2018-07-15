var path = require('path');

module.exports = {
	mode: 'none',
	entry: './js/app.js',
	output: {
		path: path.resolve('./dist'),
		filename: 'bundle.js'
	}
}