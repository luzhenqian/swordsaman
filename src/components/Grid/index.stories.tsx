import React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "./index";

storiesOf("Layout （布局）", module).add("Grid （栅格）", () => {
  return (
    <>
      <Grid>
        <Grid>还没有做哦。</Grid>
      </Grid>
    </>
  );
});
