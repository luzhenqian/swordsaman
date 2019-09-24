import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./index";

storiesOf("Inputs （输入）", module).add("Input （输入框）", () => (
  <>
    <Input />
    <Input prefixIcon="coffee" />
  </>
));
