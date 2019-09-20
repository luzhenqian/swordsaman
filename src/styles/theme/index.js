const defaultTheme = {
    colorPrimary: getPropertyValue("sm-colorPrimary")
        ? getPropertyValue("sm-colorPrimary")
        : "#409EFF",
    colorSuccess: getPropertyValue("sm-colorSuccess")
        ? getPropertyValue("sm-colorSuccess")
        : "#67C23A",
    colorWarning: getPropertyValue("sm-colorWarning")
        ? getPropertyValue("sm-colorWarning")
        : "#E6A23C",
    colorDanger: getPropertyValue("sm-colorDanger")
        ? getPropertyValue("sm-colorDanger")
        : "#F56C6C",
    colorInfo: getPropertyValue("sm-colorInfo")
        ? getPropertyValue("sm-colorInfo")
        : "#909399",
    colorTextPrimary: getPropertyValue("sm-colorTextPrimary")
        ? getPropertyValue("sm-colorTextPrimary")
        : "#303133",
    colorTextRegular: getPropertyValue("sm-colorTextRegular")
        ? getPropertyValue("sm-colorTextRegular")
        : "#606266",
    colorTextSecondary: getPropertyValue("sm-colorTextSecondary")
        ? getPropertyValue("sm-colorTextSecondary")
        : "#909399",
    colorTextPlaceholder: getPropertyValue("sm-colorTextPlaceholder")
        ? getPropertyValue("sm-colorTextPlaceholder")
        : "#C0C4CC",
    borderColorBase: getPropertyValue("sm-borderColorBase")
        ? getPropertyValue("sm-borderColorBase")
        : "#DCDFE6",
    borderColorLight: getPropertyValue("sm-borderColorLight")
        ? getPropertyValue("sm-borderColorLight")
        : "#E4E7ED",
    borderColorLighter: getPropertyValue("sm-borderColorLighter")
        ? getPropertyValue("sm-borderColorLighter")
        : "#EBEEF5",
    borderColorExtraLight: getPropertyValue("sm-borderColorExtraLight")
        ? getPropertyValue("sm-borderColorExtraLight")
        : "#F2F6FC",
    colorWhite: getPropertyValue("sm-colorWhite")
        ? getPropertyValue("sm-colorWhite")
        : "#FFFFFF",
    colorBlack: getPropertyValue("sm-colorBlack")
        ? getPropertyValue("sm-colorBlack")
        : "#000000",
    backgroundColorBase: getPropertyValue("sm-backgroundColorBase")
        ? getPropertyValue("sm-backgroundColorBase")
        : "#F5F7FA"
};
function getPropertyValue(valueName) {
    return window
        .getComputedStyle(window.document.body)
        .getPropertyValue(`--${valueName}`);
}
const ThemeIIEF = (function () {
    class _Theme {
        constructor() {
            this.theme = defaultTheme;
        }
    }
    let theme = null;
    function getInstance() {
        if (theme === null) {
            theme = new _Theme();
        }
        return theme;
    }
    function getTheme() {
        return getInstance().theme;
    }
    return getTheme();
})();
export default ThemeIIEF;
