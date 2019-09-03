import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Button";
import Tooltip, { Placement } from "../components/Tooltip/index";

storiesOf("Button", module).add("基本用法", () => <Button>按钮 </Button>);

storiesOf("提示", module)
  .add("基本用法", () => (
    <Tooltip title={<div>123</div>} placement={Placement.bottom}>
      <Button>444</Button>
      <Button>444</Button>
    </Tooltip>
  ))
  .add(
    "其他用法",
    () => {
      return <Button>123</Button>;
    },
    {
      notes: "add notes .."
    }
  );
