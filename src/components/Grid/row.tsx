import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  // gutter: number | object; // 栅格间隔
  gutter: number; // 栅格间隔
}

class Row extends React.Component<Props, any> {
  static defaultProps = {
    gutter: 12
  };
  render() {
    const Row = styled.div`
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

    return (
      <Row>
        {React.Children.map(this.props.children, e => {
          console.log(e);

          return e;
        })}
      </Row>
    );
  }
}

export default Row;
