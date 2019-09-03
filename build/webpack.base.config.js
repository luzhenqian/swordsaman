const path = require("path");

const config = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        use: "awesome-typescript-loader"
      }
    ]
  }
};

module.exports = config;
