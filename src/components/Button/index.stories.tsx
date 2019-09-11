import React from "react";
import { storiesOf } from "@storybook/react";
import Button, { Color, Type, Size, Status } from "./index";

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
          outlined primary
        </Button>
        <Button color={Color.secondary} type={Type.outlined}>
          outlined secondary
        </Button>
      </div>
      <div>
        <p>Type ghost</p>
        <Button color={Color.primary} type={Type.ghost}>
          ghost
        </Button>
        <Button color={Color.secondary} type={Type.ghost}>
          ghost
        </Button>
      </div>
      <div>
        <p>Type round</p>
        <Button color={Color.primary} type={Type.round}>
          round
        </Button>
        <Button color={Color.secondary} type={Type.round}>
          round
        </Button>
      </div>
      <div>
        <p>Type circle</p>
        <Button color={Color.primary} type={Type.circle}>
          1
        </Button>
        <Button color={Color.secondary} type={Type.circle}>
          234
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
      <div>
        <p>Status</p>
        <Button
          type={Type.contained}
          color={Color.primary}
          status={Status.default}
          onClick={() => console.log("click.")}
        >
          default
        </Button>
        <Button
          color={Color.secondary}
          status={Status.loading}
          onClick={() => console.log("click")}
        >
          loading
        </Button>
        <Button
          color={Color.default}
          status={Status.disabled}
          onClick={() => console.log("click")}
        >
          disabled
        </Button>
      </div>
    </>
  ),
  {
    notes: "afafsd"
  }
);
