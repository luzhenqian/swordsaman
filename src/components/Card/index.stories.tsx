import React from "react";
import { storiesOf } from "@storybook/react";
import Card, { Shadow } from "./index";
import styled from "styled-components";

const stories = storiesOf("Data Display （数据展示）", module);

stories.add("Card （卡片）", () => {
  const Container = styled.div`
    margin: 30px;
  `;
  return (
    <>
      <Container>
        <Card>这是一个卡片</Card>
      </Container>
      <Container>
        <Card shadow={Shadow.hover}>这是一个卡片</Card>
      </Container>
      <Container>
        <Card shadow={Shadow.always}>这是一个卡片</Card>
      </Container>
      <Container>
        <Card header={<a>MacBook Pro</a>}>
          <p>更多力量。</p>
          <p>更多表现。</p>
          <p>更亲。</p>
          <p>起价1299美元</p>
        </Card>
      </Container>
    </>
  );
});
