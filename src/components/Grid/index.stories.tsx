import React from "react";
import { storiesOf } from "@storybook/react";
import { Row, Col } from "./index";

storiesOf("Layout （布局）", module).add("Grid （栅格）", () => {
  return (
    <>
      <Row>
        <Col offset={2} sm={4}>
          占4个格子
        </Col>
        <Col offset={4} xs={12} sm={12} md={12}>
          占12个格子
        </Col>
        <Col offset={4} sm={3}>
          默认占3个格子
          <Col>test</Col>
        </Col>
        <Col sm={5}>
          <div>
            还没有做哦4。
            <div>5</div>
            <div>6</div>
          </div>
        </Col>
        1
      </Row>
    </>
  );
});
