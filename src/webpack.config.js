const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: './src/component/meditor.js',
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'component/monaco.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new MonacoWebpackPlugin({
			languages: ['typescript', 'javascript', 'css']
		})
	]
};





// plugins: [
// 	new monacoWebpackPlugin()
//   ]