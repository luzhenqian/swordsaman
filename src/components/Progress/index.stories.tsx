import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import Progress from "./index";
import Button from "../Button";

storiesOf("用户反馈", module)
  .addDecorator(withKnobs)
  .add(
    "progress （进度条）",
    () => {
      let percent = number("p", -10);
      return (
        <div>
          <Progress percent={percent} />
          <Button
            onClick={() => {
              percent++;
              console.log(percent);
            }}
          >
            加1
          </Button>
        </div>
      );
    },
    {
      info: `hi`
    }
  );
