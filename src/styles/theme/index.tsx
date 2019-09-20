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

function getPropertyValue(valueName: string) {
  return window
    .getComputedStyle(window.document.body)
    .getPropertyValue(`--${valueName}`);
}

const ThemeIIEF = (function() {
  class _Theme {
    theme: Theme;
    constructor() {
      this.theme = defaultTheme;
    }
  }

  let theme: _Theme | null = null;

  function getInstance(): _Theme {
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
