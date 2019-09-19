export interface Theme {
  // Brand Color
  colorPrimary: string; //主题色
  // Functional Color
  colorSuccess?: string; // 成功色
  colorWarning?: string; // 警告色
  colorDanger?: string; // 危险色
  colorInfo?: string; //信息色
  // Font Color
  colorTextPrimary?: string; //主要字体色
  colorTextRegular?: string; // 常规文字颜色
  colorTextSecondary?: string; //次要文字颜色
  colorTextPlaceholder?: string; //占位文字颜色
  // Border Color
  borderColorBase?: string; // 一级边框色
  borderColorLight?: string; // 二级边框色
  borderColorLighter?: string; // 三级边框色
  borderColorExtraLight?: string; // 四级边框色
  // BackgroundColor
  colorWhite?: string; // 基础白色
  colorBlack?: string; // 基础黑色
  backgroundColorBase?: string; // 基础背景色
}

const defaultTheme: Theme = {
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

const ThemeIIEF = (function() {
  class _Theme {
    theme: Theme;
    constructor() {
      this.theme = defaultTheme;
    }
    setTheme(theme: Theme) {
      this.theme = Object.assign({}, this.theme, theme);
    }
  }

  let theme: _Theme | null = null;

  function getInstance(): _Theme {
    if (theme === null) {
      theme = new _Theme();
    }
    return theme;
  }

  // FIXME: 只有热更新后才能得到最新的设置，可以考虑按照Vue的思想，收集使用者，set时通知它们数据发生了变化
  // 可以尝试使用 JavaScript 读取 css 变量，这样用户只需要在应用中添加一个css文件即可。但是兼容性并不好。
  // 还有 React 的 context
  function setTheme(theme: Theme) {
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
