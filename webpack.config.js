var path = require('path')

module.export = {
	entry: './src/scripts.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public'
	},
}