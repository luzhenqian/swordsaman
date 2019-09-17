import React from "react";
import styled, { keyframes } from "styled-components";
import * as R from "ramda";
import Icon from "../Icon";
export var Color;
(function (Color) {
    Color["default"] = "default";
    Color["primary"] = "primary";
    Color["secondary"] = "secondary";
})(Color || (Color = {}));
export var Type;
(function (Type) {
    Type["default"] = "contained";
    Type["contained"] = "contained";
    Type["outlined"] = "outlined";
    Type["text"] = "text";
    Type["ghost"] = "ghost";
    Type["round"] = "round";
    Type["circle"] = "circle"; // 圆形按钮
})(Type || (Type = {}));
export var Size;
(function (Size) {
    Size["default"] = "medium";
    Size["small"] = "small";
    Size["medium"] = "medium";
    Size["large"] = "large";
})(Size || (Size = {}));
export var Status;
(function (Status) {
    Status["default"] = "normal";
    Status["disabled"] = "disabled";
    Status["loading"] = "loading";
})(Status || (Status = {}));
class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    clickHandler(e) {
        if (this.props.status === Status.default) {
            this.props.onClick(e);
        }
    }
    render() {
        const createStyle = R.pipe(R.curry(createStyleByColor)(R.__, this.props), R.curry(createStyleByType)(R.__, this.props), R.curry(createStyleBySize)(R.__, this.props), R.curry(createStyleByStatus)(R.__, this.props));
        const Button = createStyle(createBaseStyle());
        const rotate = keyframes `
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `;
        const Rotate = styled.span `
      display: inline-block;
      animation: ${rotate} 2s linear infinite;
    `;
        return (React.createElement(Button, { onClick: this.clickHandler.bind(this) },
            this.props.status === Status.loading ? (React.createElement(Rotate, null,
                React.createElement(Icon, { icon: "spinner" }))) : null,
            this.props.children));
    }
}
Button.defaultProps = {
    color: Color.default,
    type: Type.default,
    size: Size.default,
    status: Status.default,
    onClick: Function.prototype
};
// FIXME:函数式的原则是保持纯函数，直接修改component是有问题的。
function createStyleByColor(component, props) {
    const { color, hoverColor } = getColorByColor(props.color);
    return styled(component) `
    background-color: ${hoverColor};
    :hover {
      background-color: ${color};
    }
    :active {
      background-color: ${hoverColor};
    }
  `;
}
function createStyleByType(component, props) {
    const { color, hoverColor } = getColorByColor(props.color);
    switch (props.type) {
        case Type.text: {
            return styled(component) `
        background-color: transparent;
        border: 0;
        box-shadow: none;
        color: ${hoverColor};
        opacity: 0.8;
        :hover {
          background-color: ${color};
          opacity: 0.9;
        }
        :active {
          opacity: 1;
        }
      `;
        }
        case Type.outlined: {
            return styled(component) `
        background-color: transparent;
        border: 1px solid ${color};
        box-shadow: none;
        color: ${hoverColor};
        :hover {
          background-color: ${color};
        }
      `;
        }
        case Type.ghost: {
            return styled(component) `
        background-color: transparent;
        color: ${color};
        box-shadow: none;
        border: ${color} 1px solid;
        :hover {
          color: ${hoverColor};
          border-color: ${hoverColor};
          background-color: rgba(0, 0, 0, 0.1);
        }
      `;
        }
        case Type.round: {
            return styled(component) `
        border-radius: 20px;
        padding: 12px 23px;
      `;
        }
        case Type.circle: {
            return styled(component) `
        border-radius: 50%;
        padding: 0px;
        width: 40px;
        height: 40px;
        font-size: 12px;
        overflow: hidden;
      `;
        }
        case Type.contained:
        default: {
            return styled(component) ``;
        }
    }
}
function createStyleBySize(component, props) {
    switch (props.size) {
        case Size.small: {
            return styled(component) `
        font-size: 12px;
        padding: ${props.type === Type.circle ? "0px" : "1px 6px"};
        border-radius: 3px;
      `;
        }
        case Size.medium:
        default: {
            return styled(component) `
        font-size: 12px;
        padding: ${props.type === Type.circle ? "0px" : "5px 15px"};
      `;
        }
        case Size.large: {
            return styled(component) `
        font-size: 14px;
        padding: ${props.type === Type.circle ? "0px" : "6px 15px"};
      `;
        }
    }
}
function createStyleByStatus(component, props) {
    const { hoverColor } = getColorByColor(props.color);
    switch (props.status) {
        case Status.disabled: {
            return styled(component) `
        /* pointer-events: none; */
        /* 阻止点击事件，但是会让 cursor 也失效 */
        cursor: not-allowed;
        opacity: 0.6;
        :hover {
          background-color: ${hoverColor};
        }
      `;
        }
        case Status.loading: {
            return styled(component) `
        cursor: default;
        opacity: 0.6;
        :hover {
          background-color: ${hoverColor};
        }
      `;
        }
        case Status.default:
        default: {
            return component;
        }
    }
}
function createBaseStyle() {
    return styled.button `
    box-sizing: border-box;
    margin: 8px;
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 4px;
    line-height: 1.5;
    color: #ffffff;
    cursor: pointer;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    user-select: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :focus {
      outline: none;
    }
  `;
}
function getColorByColor(color) {
    switch (color) {
        case Color.primary: {
            return {
                color: "#5698c3",
                hoverColor: "#2177b8" // 虹蓝
            };
        }
        case Color.secondary: {
            return {
                color: "#f07c82",
                hoverColor: "#c04851" // 玉红
            };
        }
        case Color.default:
        default: {
            return {
                color: "#c0c4c3",
                hoverColor: "#a4aca7" // 冰山蓝
            };
        }
    }
}
export default Button;
