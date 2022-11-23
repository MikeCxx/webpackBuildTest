const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const test = `<title><%= htmlWebpackPlugin.options.title %></title>`
const temFn = ({htmlWebpackPlugin}) => `
<html>
  <head>
  </head>
  <body>
    <h1>Hello World</h1>
    ${htmlWebpackPlugin?.options?.templateParameters?.a}
  </body>
</html>
`
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      templateParameters: {a: 1},
      templateContent: temFn,
      title: '无敌寂寞',
      filename: 'index.html', // 指定输出文件名和位置（相对于输出目录）
     })
   ]
};