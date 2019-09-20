import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Size } from "./row";

interface Props {
  children?: React.ReactNode;
  span?: number; // 栅格占位
  offset: number | Size; // 偏移量
  // 响应式栅格
  xs?: number; // <576px
  sm?: number; // >=576px
  md?: number; // >=768px
  lg?: number; // >=992px
  xl?: number; // >=1200px
  xxl?: number; // >=1600px
}

class Col extends React.Component<Props, any> {
  static defaultProps = {
    offset: 0,
    xs: 4,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4,
    xxl: 4
  };
  render() {
    const Col = createStyled(this.props);
    return (
      <Col>
        <div>{this.props.children}</div>
      </Col>
    );
  }
}

function createStyled(props: Props) {
  return createStyledByOffset(createStyledBySize(props), props.offset);
}

function createStyledBySize(props: Props) {
  return styled.div`
    display: inline-block;
    box-sizing: border-box;
    @media screen and (max-width: 576px) {
      width: calc(100% / 24 * ${props.span ? props.span : props.xs});
    }
    @media screen and (min-width: 576px) {
      width: calc(100% / 24 * ${props.span ? props.span : props.xs});
    }
    @media screen and (min-width: 768px) {
      width: calc(100% / 24 * ${props.span ? props.span : props.xs});
    }
    @media screen and (min-width: 992px) {
      width: calc(100% / 24 * ${props.span ? props.span : props.xs});
    }
    @media screen and (min-width: 1200px) {
      width: calc(100% / 24 * ${props.span ? props.span : props.xs});
    }
    @media screen and (min-width: 1600px) {
      width: calc(100% / 24 * ${props.span ? props.span : props.xs});
    }
    > div {
      background-color: ${() => {
        return `hsla(${Math.floor(Math.random() * 360)}, 100%, 50%, 1)`;
      }};
      width: 100%;
    }
  `;
}

function createStyledByOffset(
  component: AnyStyledComponent,
  offset: number | Size
) {
  if (typeof offset === "number") {
    return styled(component)`
      margin-left: calc(100% / 24 * ${offset});
    `;
  } else if (typeof offset === "object") {
    return styled(component)`
      @media screen and (max-width: 576px) {
        margin-left: calc(100% / 24 * ${offset.xs});
      }
      @media screen and (min-width: 576px) {
        margin-left: calc(100% / 24 * ${offset.sm});
      }
      @media screen and (min-width: 768px) {
        margin-left: calc(100% / 24 * ${offset.md});
      }
      @media screen and (min-width: 992px) {
        margin-left: calc(100% / 24 * ${offset.lg});
      }
      @media screen and (min-width: 1200px) {
        margin-left: calc(100% / 24 * ${offset.xl});
      }
      @media screen and (min-width: 1600px) {
        margin-left: calc(100% / 24 * ${offset.xxl});
      }
    `;
  }
  return component;
}

export default Col;
