import * as R from "ramda";
const _Theme = {
    colorPrimary: "#409EFF",
    // Functional Color 功能颜色
    success: "#67C23A",
    warning: "",
    danger: "",
    info: "red",
    // Font Color 字体颜色
    textPrimary: "",
    textRegular: "",
    textSecondary: "",
    textPlaceholder: "",
    // Border Color 边框颜色
    borderBase: "",
    light: "",
    lighter: "",
    extraLight: "",
    // Background Color 背景色
    white: "",
    black: "",
    backgroundColorBase: "" // 基础背景色
};
const Theme = {
    _theme: _Theme
};
function merge(theme) {
    Theme._theme = R.merge(_Theme, theme);
}
export { merge };
export default Theme._theme;
