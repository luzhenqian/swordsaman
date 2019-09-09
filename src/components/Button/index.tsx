import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

export enum Color {
  default = "default",
  primary = "primary",
  secondary = "secondary"
}

interface UseColor {
  color: string;
  hoverColor: string;
}

export enum Type {
  contained = "contained",
  outlined = "outlined",
  text = "text",
  ghost = "ghost"
}

interface Props {
  children?: React.ReactNode;
  color: Color;
  type: Type;
  onClick: Function;
}

class Button extends React.Component<Props> {
  static defaultProps = {
    color: Color.default,
    type: Type.contained,
    onClick: Function.prototype
  };
  constructor(props: Props) {
    super(props);
  }
  clickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.props.onClick(e);
  }
  render() {
    const { color, hoverColor } = initStyleByColor(this.props.color);
    const ButtonStyle = styled.button`
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
    const Button = initStyleByType(
      ButtonStyle,
      this.props.type,
      color,
      hoverColor
    );
    return (
      <Button type="button" onClick={this.clickHandler.bind(this)}>
        {this.props.children}
      </Button>
    );
  }
}

// TODO: 函数式思维重构
// initStyle 函数，传递color、type、size、status 等值过去，直接生成样式

function initStyleByColor(color: Color): UseColor {
  let _color, hoverColor: string;
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
function initStyleByType(
  component: AnyStyledComponent,
  type: Type,
  color: string,
  hoverColor: string
) {
  let style: any;
  switch (type) {
    case Type.text: {
      style = styled(component)`
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
      style = styled(component)`
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
      style = styled(component)``;
      break;
    }
  }
  return style;
}

export default Button;
