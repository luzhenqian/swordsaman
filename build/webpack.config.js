const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.prod.config");

let config = process.env.NODE_ENV === "development" ? devConfig : proConfig;
module.exports = merge(baseConfig, config);
