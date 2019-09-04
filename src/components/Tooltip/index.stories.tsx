import React from "react";
import { storiesOf } from "@storybook/react";
import Tooltip from "./index";
import MarkdownText from "./tooltip.md";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Tooltip", module);

stories.addDecorator(withKnobs);

stories
  // 装饰器，仅装饰当前组件，也可以在configure中装饰全局
  .addDecorator(storyFn => (
    <div style={{ textAlign: "center" }}>{storyFn()}</div>
  ))
  .add(
    "tooltip",
    () => {
      const title = text("title", "123");
      return (
        <Tooltip title={<a href="https://www.baidu.com">1232</a>}>
          {title}
        </Tooltip>
      );
    },
    {
      notes: { markdown: MarkdownText }
    }
  );
