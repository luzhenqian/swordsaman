const defaultTheme = {
    colorPrimary: getPropertyValue("colorPrimary")
        ? getPropertyValue("colorPrimary")
        : "#409EFF",
    colorSuccess: getPropertyValue("colorSuccess")
        ? getPropertyValue("colorSuccess")
        : "#67C23A",
    colorWarning: getPropertyValue("colorWarning")
        ? getPropertyValue("colorWarning")
        : "#E6A23C",
    colorDanger: getPropertyValue("colorDanger")
        ? getPropertyValue("colorDanger")
        : "#F56C6C",
    colorInfo: getPropertyValue("colorInfo")
        ? getPropertyValue("colorInfo")
        : "#909399",
    colorTextPrimary: getPropertyValue("colorTextPrimary")
        ? getPropertyValue("colorTextPrimary")
        : "#303133",
    colorTextRegular: getPropertyValue("colorTextRegular")
        ? getPropertyValue("colorTextRegular")
        : "#606266",
    colorTextSecondary: getPropertyValue("colorTextSecondary")
        ? getPropertyValue("colorTextSecondary")
        : "#909399",
    colorTextPlaceholder: getPropertyValue("colorTextPlaceholder")
        ? getPropertyValue("colorTextPlaceholder")
        : "#C0C4CC",
    borderColorBase: getPropertyValue("borderColorBase")
        ? getPropertyValue("borderColorBase")
        : "#DCDFE6",
    borderColorLight: getPropertyValue("borderColorLight")
        ? getPropertyValue("borderColorLight")
        : "#E4E7ED",
    borderColorLighter: getPropertyValue("borderColorLighter")
        ? getPropertyValue("borderColorLighter")
        : "#EBEEF5",
    borderColorExtraLight: getPropertyValue("borderColorExtraLight")
        ? getPropertyValue("borderColorExtraLight")
        : "#F2F6FC",
    colorWhite: getPropertyValue("colorWhite")
        ? getPropertyValue("colorWhite")
        : "#FFFFFF",
    colorBlack: getPropertyValue("colorBlack")
        ? getPropertyValue("colorBlack")
        : "#000000",
    backgroundColorBase: getPropertyValue("backgroundColorBase")
        ? getPropertyValue("backgroundColorBase")
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
    return {
        getTheme
    };
})();
export default ThemeIIEF;
