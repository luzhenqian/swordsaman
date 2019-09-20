import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import Col from "./col";
import R from "ramda";

export interface Size {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export enum Justify {
  start = "flex-start",
  end = "flex-end",
  center = "center",
  "space-around" = "space-around",
  "space-between" = "space-between"
}

export enum Align {
  start = "flex-start",
  end = "flex-end",
  stretch = "stretch",
  center = "center",
  baseline = "baseline"
}

interface Props {
  children: React.ReactNode;
  gutter: number | Size; // 栅格间隔
  justify: Justify; // 水平排列方式
  align: Align; // 垂直排列方式
}

class Row extends React.Component<Props, any> {
  static defaultProps = {
    gutter: 0,
    justify: Justify.start,
    align: Align.baseline
  };
  render() {
    const Row = createStyled(this.props);
    return <Row>{renderChildren(this.props.children)}</Row>;
  }
}

function renderChildren(children: React.ReactNode) {
  let render: Array<React.ReactNode> = [];
  React.Children.forEach(children, e => {
    if (e !== null && typeof e === "object") {
      if ("type" in e) {
        if (e.type === Col) {
          render.push(e);
        }
      }
    }
  });
  return render;
}

function createStyled(props: Props) {
  return R.pipe(
    createBaseStyled,
    R.curry(createStyledByJustify)(R.__, props.justify),
    R.curry(createStyledByAlign)(R.__, props.align),
    R.curry(createStyledByGutter)(R.__, props.gutter)
  )();
}

function createBaseStyled(): AnyStyledComponent {
  return styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    width: 100%;
  `;
}

function createStyledByJustify(
  component: AnyStyledComponent,
  justify: Justify
): AnyStyledComponent {
  return styled(component)`
    justify-content: ${justify};
  `;
}

function createStyledByAlign(
  component: AnyStyledComponent,
  align: Align
): AnyStyledComponent {
  return styled(component)`
    align-items: ${align};
  `;
}

function createStyledByGutter(
  component: AnyStyledComponent,
  gutter: number | Size
): AnyStyledComponent {
  if (typeof gutter === "number") {
    return styled(component)`
      & > div {
        padding: 0 ${gutter / 2}px;
      }
    `;
  } else if (typeof gutter === "object") {
    return styled(component)`
      & > div {
        @media screen and (max-width: 576px) {
          padding: 0 ${gutter.xs / 2}px;
        }
        @media screen and (min-width: 576px) {
          padding: 0 ${gutter.sm / 2}px;
        }
        @media screen and (min-width: 768px) {
          padding: 0 ${gutter.md / 2}px;
        }
        @media screen and (min-width: 992px) {
          padding: 0 ${gutter.lg / 2}px;
        }
        @media screen and (min-width: 1200px) {
          padding: 0 ${gutter.xl / 2}px;
        }
        @media screen and (min-width: 1600px) {
          padding: 0 ${gutter.xxl / 2}px;
        }
      }
    `;
  }
  return component;
}

export default Row;
