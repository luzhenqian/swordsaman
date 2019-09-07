import React from "react";
import { storiesOf } from "@storybook/react";
import Button, { Color } from "./index";

storiesOf("button", module).add(
  "button",
  () => (
    <>
      <Button>defualt</Button>
      <Button color={Color.primary}>primary</Button>
      <Button color={Color.secondary}>secondary</Button>
    </>
  ),
  {
    notes: "afafsd"
  }
);
