const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader")
        },
        // Optional
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ]
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "typings-for-css-modules-loader",
          options: {
            modules: true,
            // 类名导出
            namedExport: true,
            // 支持驼峰命名法
            camelCase: true,
            // 使用 sass
            sass: true
          }
        },
        "sass-loader"
      ],
      include: path.resolve(__dirname, "../")
    }
  );
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias = {
    "@styles": path.resolve(__dirname, "../src/styles")
  };
  // config.externals = {
  //   react: "react",
  //   "react-dom": "react-dom"
  // };
  return config;
};
