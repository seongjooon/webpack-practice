const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin"); // 웹팩이 html 파일을 읽어서 html 파일을 빌드할 수 있게

module.exports = {
  entry: "./src/test.js", // 웹팩이 빌드할 파일
  output: { // 빌드를 완료하면 output 내에 명시되어있는 정보를 통해 빌드 파일 생성
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  mode: "none", // 빌드 옵션 //production은 최적화, development는 빠르게, none은 아무 기능없이
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader", // 웹팩이 이해할 수 있게하고
            options: { minimize: true } // 코드 최적화 옵션.
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html', // public/index.html 파일을 읽는다.
      filename: 'index.html' // output으로 출력할 파일은 index.html이다.
    })
  ]
};
