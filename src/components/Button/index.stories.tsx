import React from "react";
import { storiesOf } from "@storybook/react";
import Button, { Color, Type } from "./index";

storiesOf("button", module).add(
  "button",
  () => (
    <>
      <Button>defualt</Button>
      <Button color={Color.primary}>primary</Button>
      <Button color={Color.secondary}>secondary</Button>
      <Button type={Type.text}>text</Button>
      <Button color={Color.primary} type={Type.text}>
        text
      </Button>
      <Button color={Color.primary} type={Type.outlined}>
        outlined
      </Button>
    </>
  ),
  {
    notes: "afafsd"
  }
);
