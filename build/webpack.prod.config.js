const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devtool: "cheap-module-source-map",
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["./dist"] })
  ]
};
