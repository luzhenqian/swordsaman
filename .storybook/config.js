import { configure, addParameters } from "@storybook/react";
import Theme from "./theme";
// 全局配置 http://qingisnotchina.blogspot.com/
addParameters({
  options: {
    theme: Theme
  }
});

const req = require.context("../src/components", true, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
