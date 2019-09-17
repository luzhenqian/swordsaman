import React, { Component } from "react";
import styled from "styled-components";
export var Orientation;
(function (Orientation) {
    Orientation["left"] = "left";
    Orientation["right"] = "right";
    Orientation["center"] = "center";
})(Orientation || (Orientation = {}));
export var Type;
(function (Type) {
    Type["horizontal"] = "horizontal";
    Type["vertical"] = "vertical";
})(Type || (Type = {}));
class Divider extends Component {
    render() {
        const Divider = this.props.children !== undefined
            ? styled.div `
            position: relative;
            margin: 16px 0;
            border: none;
            /* FIXME: 这并不是真正的1px */
            height: 1px;
            background-color: rgba(0, 0, 0, 0.12);
          `
            : styled.hr `
            position: relative;
            margin: 0;
            border: none;
            height: 1px;
            background-color: rgba(0, 0, 0, 0.12);
          `;
        const DividerInnerText = createStyledByOrientation(this.props.orientation);
        return (React.createElement(Divider, { className: this.props.className }, this.props.children !== undefined ? (React.createElement(DividerInnerText, null, this.props.children)) : null));
    }
}
Divider.defaultProps = {
    type: Type.horizontal,
    orientation: Orientation.center
};
function createStyledByOrientation(orientation) {
    const baseStyled = styled.div `
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
            return styled(baseStyled) `
        left: 50%;
        transform: translate(-50%, -50%);
      `;
        }
        case Orientation.left: {
            return styled(baseStyled) `
        left: 20px;
      `;
        }
        case Orientation.right: {
            return styled(baseStyled) `
        right: 20px;
      `;
        }
    }
}
export default Divider;
