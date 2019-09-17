import React, { Component } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import Divider from "../../components/Divider";

export enum Shadow {
  always = "always", // 永远显示
  hover = "hover", // 鼠标悬停显示
  never = "never" // 永远不显示
}
interface Props {
  children?: React.ReactNode;
  header?: React.ReactNode;
  shadow: Shadow;
}

class Card extends Component<Props, any> {
  static defaultProps = {
    shadow: Shadow.never
  };
  render() {
    const Card = createStyledByShadow(
      styled.div`
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.87);
        transition: 0.3s;
      `,
      this.props.shadow
    );
    const CardHead = styled.div`
        padding: 20px;
      `,
      CardBody = styled.div`
        padding: 20px;
      `;
    return (
      <Card>
        {this.props.header !== undefined ? (
          <>
            <CardHead>{this.props.header}</CardHead>
            <Divider />
          </>
        ) : null}
        <CardBody>{this.props.children}</CardBody>
      </Card>
    );
  }
}

function createStyledByShadow(component: AnyStyledComponent, shadow: Shadow) {
  switch (shadow) {
    case Shadow.never:
    default: {
      return component;
    }
    case Shadow.hover: {
      return styled(component)`
        :hover {
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 2px 1px -1px rgba(0, 0, 0, 0.12);
        }
      `;
    }
    case Shadow.always: {
      return styled(component)`
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 2px 1px -1px rgba(0, 0, 0, 0.12);
      `;
    }
  }
}

export default Card;
