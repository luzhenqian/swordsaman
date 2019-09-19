import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  span: number | object; // 栅格占位
  offset: number; // 偏移量
  xs?: number; // <576px
  sm?: number; // >=576px
  md?: number; // >=768px
  lg?: number; // >=992px
  xl?: number; // >=1200px
  xxl?: number; // >=1600px
}

class Col extends React.Component<Props, any> {
  static defaultProps = {
    span: 0,
    offset: 0,
    xs: 1,
    sm: 1
  };
  render() {
    const Col = styled.div`
      background-color: red;
      display: inline-block;
      box-sizing: border-box;
      @media screen and (max-width: 576px) {
        width: calc(100% / 24 * ${this.props.xs});
      }
      @media screen and (min-width: 576px) {
        width: calc(100% / 24 * ${this.props.sm});
      }
      @media screen and (min-width: 768px) {
      }
      @media screen and (min-width: 992px) {
      }
      @media screen and (min-width: 1200px) {
      }
      @media screen and (min-width: 1600px) {
      }
    `;
    return <Col>{this.props.children}</Col>;
  }
}

export default Col;
