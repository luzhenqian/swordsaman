import React from "react";
import { storiesOf } from "@storybook/react";
import Tooltip, { Placement } from "./index";
import MarkdownText from "./readme.md";
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
      const title = text(
        "title",
        `因强大而简单。
      为你带来深色模式、受专业用户启发的各种功能、三款新 app，以及重新设计的 Mac App Store。`
      );
      const placement = text("placement", Placement.left);
      return (
        <>
          <Tooltip
            style={{ marginTop: "100px" }}
            title={title}
            placement={placement as Placement}
            onOpen={() => {
              console.log("open !");
            }}
            onClose={() => {
              console.log("close!");
            }}
          >
            macOS Mojave
          </Tooltip>

          <div>
            <Tooltip
              style={{ marginTop: "100px" }}
              title="left"
              placement={Placement.left}
            >
              left
            </Tooltip>
          </div>
          <div>
            <Tooltip
              style={{ marginTop: "100px" }}
              title="right"
              placement={Placement.right}
            >
              right
            </Tooltip>
          </div>
        </>
      );
    },
    {
      notes: { markdown: MarkdownText }
    }
  );