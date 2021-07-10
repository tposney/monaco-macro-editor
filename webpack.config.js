const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/module.ts',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    publicPath: '/modules/monaco-macro-editor/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'module.js',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.ttf$/,
      use: ['file-loader']
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ["typescript","javascript"],
      features: ["!iPadShowKeyboard","!quickHelp", "!quickOutline","!suggest"]
    })
  ]
}
