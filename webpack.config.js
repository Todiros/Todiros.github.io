var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var extractPlugin = new ExtractTextPlugin({
  filename: 'style.css'
})

module.exports = {
	entry: './src/scripts.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public'
	},
	module: {
		rules: [
			{
				test: /\.js$/, 
				enforce: "pre", 
				exclude: /node_modules/,
				use: [{ loader: "jshint-loader"}]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader', 
						query: { presets: ['env'] }
					}
				]
			},
			{
				test: /\.sass$/,
				use: extractPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
		]
  },
	plugins: [
		extractPlugin,
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html'
		}),
		new CleanWebpackPlugin(['public'])
	]
}