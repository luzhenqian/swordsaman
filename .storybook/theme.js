import { create } from "@storybook/theming";

const XIANGYEHONG = "#f07c82"; // 香叶红
const QIANSHIBAI = "#e2e1e4"; // 芡食白
const JIANSHILAN = "#66a9c9"; // 涧石蓝
const YUNSHUILAN = "#baccd9"; // 云水蓝
const CHANGSHIHUI = "#363433"; // 长石灰
const MEIGUIFEN = "#f8b37f"; // 玫瑰粉
const YANHUI = "#80766e"; // 雁灰
const XUEBAI = "#fffef9"; // 雪白
const QINGSHUILAN = "#93d5dc"; // 清水蓝
const ANYUZI = "#5c2223"; // 暗玉紫
const JINYEHUANG = "#ffa60f"; // 金叶黄
const DANFEI = "#f2cac9"; // 淡绯
const JINHUANG = "#f26b1f"; // 金黄

export default {
  base: MEIGUIFEN,

  colorPrimary: JIANSHILAN,
  colorSecondary: YANHUI,

  // UI
  appBg: "black",
  appContentBg: "white",
  appBorderColor: JIANSHILAN,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: XIANGYEHONG,
  textInverseColor: MEIGUIFEN,

  // Toolbar default and active colors
  barTextColor: ANYUZI,
  barSelectedColor: JINYEHUANG,
  barBg: YUNSHUILAN,

  // Form colors
  inputBg: QIANSHIBAI,
  inputBorder: JINHUANG,
  inputTextColor: "#248067",
  inputBorderRadius: 4,

  brandTitle: "My custom storybook",
  brandUrl: "https://github.com/luzhenqian/swordsaman",
  brandImage: "https://placehold.it/350x150"
};
