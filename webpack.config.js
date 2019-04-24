const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const pug = require('pug')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	entry: './src/index.js',
	  mode: 'development',
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
	                "css-loader",
	                "style-loader"
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
	                "css-loader",
	                "sass-loader" 
				]
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './img',
							useRelativePath: true
						}
					}
				]
			},
			{
				test: /\.pug$/,
				use: [
					{
						loader: "html-loader"
					},
					{
						loader: "pug-html-loader",
						options: {
							"pretty": true
						}
					}
				]
			},
			{
			    test: /\.(eot|svg|ttf|woff|woff2)$/,
			    use: [
		           {
		                loader: 'url-loader',
		                options:{
		                	limit: 8192,
		                	name: '[name].[ext]',
		               		outputPath: './fonts',
		               		useRelativePath: true
		               }
		           },
		        ]
			}
		]
    },
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: './src/index.pug'
		}),
		new MiniCssExtractPlugin({
			filename: "style.css"
		}),
		new CleanWebpackPlugin(),

		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
	    new OptimizeCssAssetsPlugin({
	        assetNameRegExp: /\.optimize\.css$/g,
	        cssProcessor: require('cssnano'),
	        cssProcessorPluginOptions: {
	          preset: ['default', { discardComments: { removeAll: true } }],
	        },
	        canPrint: true
	    })
	]
}