import React from "react";
import { storiesOf } from "@storybook/react";
import Divider, { Orientation } from "./index";
import styled from "styled-components";

const stories = storiesOf("Data Display （数据展示）", module);

stories.add("Divider （分割线）", () => {
  const Container = styled.div`
    padding: 30px;
  `;
  return (
    <>
      <Container>
        <div>一切都刚刚好。</div>
        <Divider />
        <div>
          全新双摄系统取景范围更大，可将你的所见所爱尽收画面之中。iPhone
          迄今最快的芯片和从早用到晚的电池续航，让你能做的事更多，却无需频频充电。而有了
          iPhone 最高的视频画质，你所记录的那些美好时分，也会更加鲜活。
        </div>
      </Container>

      <Container>
        <Divider>居中</Divider>
      </Container>
      <Container>
        <Divider orientation={Orientation.left}>靠左</Divider>
      </Container>
      <Container>
        <Divider orientation={Orientation.right}>靠右</Divider>
      </Container>
    </>
  );
});
