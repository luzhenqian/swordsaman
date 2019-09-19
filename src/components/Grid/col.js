import React from "react";
import styled from "styled-components";
class Col extends React.Component {
    render() {
        const Col = styled.div `
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
        return React.createElement(Col, null, this.props.children);
    }
}
Col.defaultProps = {
    span: 0,
    offset: 0,
    xs: 1,
    sm: 1
};
export default Col;
