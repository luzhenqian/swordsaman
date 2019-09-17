import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./index";

storiesOf("Data Display （数据展示）", module).add("Icon （图标）", () => {
  return (
    <div>
      <Icon icon="alipay"></Icon>
      <Icon icon="android"></Icon>
      <Icon icon="ad"></Icon>
    </div>
  );
});
