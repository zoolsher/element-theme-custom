var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'nothing.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: {
					loader: "css-loader",
					options: {
						minimize: true
					}
				}
			})
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'file-loader?name=./font/[name].[ext]'
		}]
	},
	plugins: [
		new ExtractTextPlugin("element-set.css"),
	]
};