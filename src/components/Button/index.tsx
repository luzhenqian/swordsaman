import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import * as R from "ramda";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  contained = "contained", // 实体
  outlined = "outlined", // 环形
  text = "text", // 文本按钮
  ghost = "ghost", // 幽灵按钮
  round = "round", // 圆角按钮
  circle = "circle" // 圆形按钮
}

export enum Size {
  default = "medium",
  small = "small",
  medium = "medium",
  large = "large"
}

export enum Status {
  default = "normal",
  disabled = "disabled",
  loading = "loading"
}

interface Props {
  children?: React.ReactNode;
  color: Color;
  type: Type;
  size: Size;
  status: Status;
  onClick: Function;
}

class Button extends React.Component<Props, any> {
  static defaultProps = {
    color: Color.default,
    type: Type.contained,
    size: Size.large,
    status: Status.default,
    onClick: Function.prototype
  };
  constructor(props: Props) {
    super(props);
  }
  clickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.props.onClick(e);
  }
  render() {
    const Button = createStyle({
      component: createBasicStyle(),
      props: this.props
    }).component;
    return (
      <Button
        onClick={
          this.props.status === Status.default
            ? this.clickHandler.bind(this)
            : null
        }
      >
        {/* FIXME: 引入该组件报错*/}
        {/* <FontAwesomeIcon /> */}
        {this.props.status === Status.loading ? <div>loading...</div> : ""}
        {this.props.children}
      </Button>
    );
  }
}

const createStyle = R.pipe(
  createStyleByColor,
  createStyleByType,
  createStyleBySize,
  createStyleByStatus
);

type CreateStyleParams = {
  component: AnyStyledComponent;
  props: Props;
};

// FIXME:函数式的原则是保持纯函数，直接修改component是有问题的。
function createStyleByColor(cp: CreateStyleParams): CreateStyleParams {
  const { color, hoverColor } = getColorByColor(cp.props.color);
  const component = styled(cp.component)`
    background-color: ${color};
    :hover {
      background-color: ${hoverColor};
    }
  `;
  return { component, props: cp.props };
}

function createStyleByType(cp: CreateStyleParams): CreateStyleParams {
  let styledComponent: any;
  const { color, hoverColor } = getColorByColor(cp.props.color);
  switch (cp.props.type) {
    case Type.text: {
      styledComponent = styled(cp.component)`
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
      styledComponent = styled(cp.component)`
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
      styledComponent = styled(cp.component)`
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
      break;
    }
    case Type.round: {
      styledComponent = styled(cp.component)`
        border-radius: 20px;
        padding: 12px 23px;
      `;
      break;
    }
    case Type.circle: {
      styledComponent = styled(cp.component)`
        border-radius: 50%;
        padding: 0px;
        width: 40px;
        height: 40px;
        font-size: 12px;
        overflow: hidden;
      `;
      break;
    }
    case Type.contained:
    default: {
      styledComponent = styled(cp.component)``;
      break;
    }
  }
  return {
    component: styledComponent,
    props: cp.props
  };
}

function createStyleBySize(cp: CreateStyleParams): CreateStyleParams {
  switch (cp.props.size) {
    case Size.small: {
      return {
        component: styled(cp.component)`
          font-size: 12px;
          padding: ${cp.props.type === Type.circle ? "0px" : "1px 6px"};
          border-radius: 3px;
        `,
        props: cp.props
      };
    }
    case Size.medium:
    default: {
      return {
        component: styled(cp.component)`
          font-size: 12px;
          padding: ${cp.props.type === Type.circle ? "0px" : "5px 15px"};
        `,
        props: cp.props
      };
    }
    case Size.large: {
      return {
        component: styled(cp.component)`
          font-size: 14px;
          padding: ${cp.props.type === Type.circle ? "0px" : "6px 15px"};
        `,
        props: cp.props
      };
    }
  }
}

function createStyleByStatus(cp: CreateStyleParams): CreateStyleParams {
  const { color } = getColorByColor(cp.props.color);
  switch (cp.props.status) {
    case Status.disabled: {
      return {
        component: styled(cp.component)`
          /* pointer-events: none; */
          /* 阻止点击事件，但是会让 cursor 也失效 */
          cursor: not-allowed;
          opacity: 0.6;
          :hover {
            background-color: ${color};
          }
        `,
        props: cp.props
      };
    }
    case Status.loading: {
      return {
        component: styled(cp.component)`
          cursor: default;
          opacity: 0.6;
          :hover {
            background-color: ${color};
          }
        `,
        props: cp.props
      };
    }
    case Status.default:
    default: {
      return {
        component: cp.component,
        props: cp.props
      };
    }
  }
}

function createBasicStyle(): AnyStyledComponent {
  return styled.button`
    box-sizing: border-box;
    margin: 8px;
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 4px;
    line-height: 1.5;
    color: #ffffff;
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

function getColorByColor(color: Color): UseColor {
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

export default Button;
