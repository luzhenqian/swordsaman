import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import LoadingBar from "./index";

storiesOf("Feedback （用户反馈）", module)
  .addDecorator(withKnobs)
  .add(
    "LoadingBar （加载条）",
    () => {
      let percent = number("percent", 10);
      return (
        <div>
          <LoadingBar percent={percent} />
        </div>
      );
    },
    {
      info: `hi`
    }
  );
