import React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "./index";

storiesOf("gird", module).add("grid", () => {
  return (
    <>
      <Grid>
        <Grid>hi</Grid>
      </Grid>
    </>
  );
});
