import * as R from "ramda";

const _Theme = {
  colorPrimary: "#409EFF", //主题色
  // Functional Color 功能颜色
  success: "#67C23A", // 成功色
  warning: "", // 警告色
  danger: "", // 危险色
  info: "red", //信息色
  // Font Color 字体颜色
  textPrimary: "", //主要字体色
  textRegular: "", // 常规文字颜色
  textSecondary: "", //次要文字颜色
  textPlaceholder: "", //占位文字颜色
  // Border Color 边框颜色
  borderBase: "", // 一级边框色
  light: "", // 二级边框色
  lighter: "", // 三级边框色
  extraLight: "", // 四级边框色
  // Background Color 背景色
  white: "", // 基础白色
  black: "", // 基础黑色
  backgroundColorBase: "" // 基础背景色
};

interface Theme {
  info: string;
}

const Theme = {
  _theme: _Theme
};

function merge(theme: Theme) {
  Theme._theme = R.merge(_Theme, theme);
}
export { merge };
export default Theme._theme;
