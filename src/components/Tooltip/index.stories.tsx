import React from "react";
import { storiesOf } from "@storybook/react";
import Tooltip, { Placement } from "./index";
import MarkdownText from "./readme.md";
import Button from "../Button";

const stories = storiesOf("Data Display （数据展示）", module);

stories
  // 装饰器，仅装饰当前组件，也可以在configure中装饰全局
  .addDecorator(storyFn => (
    <div style={{ textAlign: "center" }}>{storyFn()}</div>
  ))
  .add(
    "Tooltip （文字提示）",
    () => {
      return (
        <>
          <Tooltip
            style={{ marginTop: "30px" }}
            title="左上角提示文字"
            placement={Placement["top-start"]}
          >
            <Button>左上</Button>
          </Tooltip>

          <Tooltip
            style={{ marginTop: "30px" }}
            title="上边提示文字"
            placement={Placement["top"]}
          >
            <Button>上边</Button>
          </Tooltip>

          <Tooltip
            style={{ marginTop: "30px" }}
            title="右上角提示文字"
            placement={Placement["top-end"]}
          >
            <Button>右上</Button>
          </Tooltip>

          <div>
            <Tooltip
              style={{ marginTop: "30px" }}
              title="左上提示文字"
              placement={Placement["left-start"]}
            >
              <Button>左上</Button>
            </Tooltip>

            <Tooltip
              style={{ marginTop: "30px" }}
              title="右上提示文字"
              placement={Placement["right-start"]}
            >
              <Button>右上</Button>
            </Tooltip>
          </div>

          <div>
            <Tooltip
              style={{ marginTop: "30px" }}
              title="左边提示文字"
              placement={Placement.left}
            >
              <Button>左</Button>
            </Tooltip>

            <Tooltip
              style={{ marginTop: "30px" }}
              title="右边提示文字"
              placement={Placement.right}
            >
              <Button>右</Button>
            </Tooltip>
          </div>

          <div>
            <Tooltip
              style={{ marginTop: "30px" }}
              title="左下提示文字"
              placement={Placement["left-end"]}
            >
              <Button>左下</Button>
            </Tooltip>

            <Tooltip
              style={{ marginTop: "30px" }}
              title="右下提示文字"
              placement={Placement["right-end"]}
            >
              <Button>右下</Button>
            </Tooltip>
          </div>

          <div>
            <Tooltip
              style={{ marginTop: "30px" }}
              title="左下提示文字"
              placement={Placement["bottom-start"]}
            >
              <Button>左下</Button>
            </Tooltip>

            <Tooltip
              style={{ marginTop: "30px" }}
              title="下边提示文字"
              placement={Placement.bottom}
            >
              <Button>下</Button>
            </Tooltip>

            <Tooltip
              style={{ marginTop: "30px" }}
              title="右下提示文字"
              placement={Placement["bottom-end"]}
            >
              <Button>右下</Button>
            </Tooltip>
          </div>
        </>
      );
    },
    {
      notes: MarkdownText
    }
  );
