// webpack.config.js
// `webpack` command will pick up this config setup by default
// package.json 에서 아래와 같은 코드 에서 했던 것을 이 파일에서 관리
//  "build" : "webpack --mode=none --entry=src/index.js --output=public/output.js"
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};