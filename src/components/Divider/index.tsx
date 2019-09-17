import React, { Component } from "react";
import styled from "styled-components";

export enum Orientation {
  left = "left",
  right = "right",
  center = "center"
}

export enum Type {
  horizontal = "horizontal",
  vertical = "vertical"
}

interface Props {
  children?: React.ReactNode;
  className?: any;
  type: Type; // 水平/垂直
  orientation: Orientation; // 分割线内容的位置
}

class Divider extends Component<Props, any> {
  static defaultProps = {
    type: Type.horizontal,
    orientation: Orientation.center
  };
  render() {
    const Divider =
      this.props.children !== undefined
        ? styled.div`
            position: relative;
            margin: 16px 0;
            border: none;
            /* FIXME: 这并不是真正的1px */
            height: 1px;
            background-color: rgba(0, 0, 0, 0.12);
          `
        : styled.hr`
            position: relative;
            margin: 0;
            border: none;
            height: 1px;
            background-color: rgba(0, 0, 0, 0.12);
          `;
    const DividerInnerText = createStyledByOrientation(this.props.orientation);
    return (
      <Divider className={this.props.className}>
        {this.props.children !== undefined ? (
          <DividerInnerText>{this.props.children}</DividerInnerText>
        ) : null}
      </Divider>
    );
  }
}

function createStyledByOrientation(orientation: Orientation) {
  const baseStyled = styled.div`
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    transform: translateY(-50%);
    padding: 0 10px;
    background-color: #ffffff;
  `;
  switch (orientation) {
    case Orientation.center:
    default: {
      return styled(baseStyled)`
        left: 50%;
        transform: translate(-50%, -50%);
      `;
    }
    case Orientation.left: {
      return styled(baseStyled)`
        left: 20px;
      `;
    }
    case Orientation.right: {
      return styled(baseStyled)`
        right: 20px;
      `;
    }
  }
}

export default Divider;
