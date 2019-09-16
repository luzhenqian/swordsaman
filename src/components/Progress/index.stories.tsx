import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import Progress from "./index";

storiesOf("progress", module)
  .addDecorator(withKnobs)
  .add("progress", () => {
    let percent = number("p", -10);
    return (
      <div>
        <Progress percent={percent} />
      </div>
    );
  });
