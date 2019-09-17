import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import Progress from "./index";

storiesOf("Feedback （用户反馈）", module)
  .addDecorator(withKnobs)
  .add(
    "Progress （进度条）",
    () => {
      let percent = number("percent", 10);
      return (
        <div>
          <Progress percent={percent} />
        </div>
      );
    },
    {
      info: `hi`
    }
  );
