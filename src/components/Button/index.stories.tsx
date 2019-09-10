import React from "react";
import { storiesOf } from "@storybook/react";
import Button, { Color, Type, Size } from "./index";

storiesOf("button", module).add(
  "button",
  () => (
    <>
      <div>
        <p>Color</p>
        <Button>defualt</Button>
        <Button color={Color.primary}>primary</Button>
        <Button color={Color.secondary}>secondary</Button>
      </div>
      <div>
        <p>Type text</p>
        <Button type={Type.text}>text</Button>
        <Button color={Color.primary} type={Type.text}>
          text
        </Button>
        <Button color={Color.secondary} type={Type.text}>
          text
        </Button>
      </div>
      <div>
        <p>Type outlined</p>
        <Button color={Color.primary} type={Type.outlined}>
          outlined
        </Button>
        <Button color={Color.secondary} type={Type.outlined}>
          outlined
        </Button>
      </div>
      <div>
        <p>Size</p>
        <Button type={Type.contained} color={Color.primary} size={Size.small}>
          small
        </Button>
        <Button color={Color.secondary} size={Size.medium}>
          medium
        </Button>
        <Button color={Color.default} size={Size.large}>
          large
        </Button>
      </div>
    </>
  ),
  {
    notes: "afafsd"
  }
);
