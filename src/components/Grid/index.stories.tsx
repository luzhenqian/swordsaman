import React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "./index";

storiesOf("布局", module).add("grid", () => {
  return (
    <>
      <Grid>
        <Grid>hi</Grid>
      </Grid>
    </>
  );
});
