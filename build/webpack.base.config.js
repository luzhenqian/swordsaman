const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: "./src/index.tsx",
  output: {
    filename: "swordsman.js",
    libraryTarget: "umd",
    library: "swordsman",
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"] // 数组内填入什么后缀，引入该后缀文件时可以不带后缀
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     plugins: [require("postcss-preset-env")]
          //   }
          // },
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [new CleanWebpackPlugin()]
};

module.exports = config;
