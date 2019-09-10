import React from "react";
import styled from "styled-components";
// import * as R from "ramda";
export var Color;
(function (Color) {
    Color["default"] = "default";
    Color["primary"] = "primary";
    Color["secondary"] = "secondary";
})(Color || (Color = {}));
export var Type;
(function (Type) {
    Type["contained"] = "contained";
    Type["outlined"] = "outlined";
    Type["text"] = "text";
    Type["ghost"] = "ghost";
})(Type || (Type = {}));
export var Size;
(function (Size) {
    Size["small"] = "small";
    Size["medium"] = "medium";
    Size["large"] = "large";
})(Size || (Size = {}));
class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    clickHandler(e) {
        this.props.onClick(e);
    }
    render() {
        const { color, hoverColor } = initStyleByColor(this.props.color);
        const ButtonStyle = styled.button `
      box-sizing: border-box;
      margin: 8px;
      padding: 0.5rem 1rem;
      border: 0;
      border-radius: 4px;
      line-height: 1.5;
      color: #ffffff;
      background-color: ${color};
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
      user-select: none;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      :hover {
        background-color: ${hoverColor};
      }
    `;
        const Button2 = initStyleByType(ButtonStyle, this.props.type, color, hoverColor);
        const Button = createStyleBySize(Button2, this.props);
        // initStyle("1");
        return (React.createElement(Button, { type: "button", onClick: this.clickHandler.bind(this) }, this.props.children));
    }
}
Button.defaultProps = {
    color: Color.default,
    type: Type.contained,
    size: Size.large,
    onClick: Function.prototype
};
// TODO: 函数式思维重构
// initStyle 函数，传递color、type、size、status 等值过去，直接生成样式
// const initStyle = R.pipe(
//   initStyleByColor,
//   initStyleByType
// );
function initStyleByColor(color) {
    let _color, hoverColor;
    switch (color) {
        case Color.primary: {
            _color = "#5698c3"; // 晴蓝
            hoverColor = "#2177b8"; // 虹蓝
            break;
        }
        case Color.secondary: {
            _color = "#f07c82"; // 香叶红
            hoverColor = "#c04851"; // 玉红
            break;
        }
        case Color.default:
        default: {
            _color = "#c0c4c3"; // 月影白
            hoverColor = "#a4aca7"; // 冰山蓝
            break;
        }
    }
    return {
        color: _color,
        hoverColor
    };
}
// FIXME:函数式的原则是保持纯函数，直接修改component是有问题的。
function initStyleByType(component, type, color, hoverColor) {
    let style;
    switch (type) {
        case Type.text: {
            style = styled(component) `
        background-color: transparent;
        border: 0;
        box-shadow: none;
        color: ${hoverColor};
        :hover {
          background-color: ${color};
        }
      `;
            break;
        }
        case Type.outlined: {
            style = styled(component) `
        background-color: transparent;
        border: 1px solid ${color};
        box-shadow: none;
        color: ${hoverColor};
        :hover {
          background-color: ${color};
        }
      `;
            break;
        }
        case Type.ghost: {
        }
        case Type.contained:
        default: {
            style = styled(component) ``;
            break;
        }
    }
    return style;
}
function createStyleBySize(component, props) {
    switch (props.size) {
        case Size.small: {
            return styled(component) `
        font-size: 12px;
        padding: 1px 6px;
        border-radius: 3px;
      `;
            break;
        }
        case Size.medium:
        default: {
            return styled(component) `
        font-size: 12px;
        padding: 5px 15px;
      `;
            break;
        }
        case Size.large: {
            return styled(component) `
        font-size: 14px;
        padding: 6px 15px;
      `;
            break;
        }
    }
}
export default Button;
