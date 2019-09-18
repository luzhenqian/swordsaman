const defaultTheme = {
    colorPrimary: "#409EFF",
    colorSuccess: "#67C23A",
    colorWarning: "#E6A23C",
    colorDanger: "#F56C6C",
    colorInfo: "#909399",
    colorTextPrimary: "#303133",
    colorTextRegular: "#606266",
    colorTextSecondary: "#909399",
    colorTextPlaceholder: "#C0C4CC",
    borderColorBase: "#DCDFE6",
    borderColorLight: "#E4E7ED",
    borderColorLighter: "#EBEEF5",
    borderColorExtraLight: "#F2F6FC",
    colorWhite: "#FFFFFF",
    colorBlack: "#000000",
    backgroundColorBase: "#F5F7FA"
};
const ThemeIIEF = (function () {
    class _Theme {
        constructor() {
            this.theme = defaultTheme;
        }
        setTheme(theme) {
            this.theme = Object.assign({}, this.theme, theme);
        }
    }
    let theme = null;
    function getInstance() {
        if (theme === null) {
            theme = new _Theme();
        }
        return theme;
    }
    // FIXME: 只有热更新后才能得到最新的设置，可以考虑按照Vue的思想，收集使用者，set时通知它们数据发生了变化
    function setTheme(theme) {
        getInstance().setTheme(theme);
    }
    function getTheme() {
        return getInstance().theme;
    }
    return {
        setTheme,
        getTheme
    };
})();
export default ThemeIIEF;
