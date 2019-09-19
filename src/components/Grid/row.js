import React from "react";
import styled from "styled-components";
class Row extends React.Component {
    render() {
        const Row = styled.div `
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      width: 100%;
      & > div {
        /* FIXME: padding会占用背景色 */
        padding: ${this.props.gutter / 2}px;
      }
    `;
        return (React.createElement(Row, null, React.Children.map(this.props.children, e => {
            console.log(e);
            return e;
        })));
    }
}
Row.defaultProps = {
    gutter: 12
};
export default Row;
