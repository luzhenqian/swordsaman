import React from "react";
import { storiesOf } from "@storybook/react";
import { Row, Col } from "./index";

storiesOf("Layout （布局）", module).add("Grid （栅格）", () => {
  const layout = {
    xs: 8,
    sm: 6,
    md: 6,
    lg: 4,
    xl: 3,
    xxl: 12
  };

  return (
    <>
      <Row gutter={16}>
        <Col {...layout}>占4个格子</Col>
        <Col offset={1} span={2}>
          占12个格子
        </Col>
        <Col offset={1} span={4}>
          默认占3个格子
        </Col>
        <Col offset={2} span={4}>
          <div>
            还没有做哦4。
            <div>5</div>
            <div>6</div>
          </div>
        </Col>
        1
      </Row>

      <Row>
        <Col span={0}>1</Col>
        <Col>2</Col>
        <Col>3</Col>
        <Col>4</Col>
        <Col>5</Col>
        <Col>6</Col>
      </Row>
    </>
  );
});
