import React from "react";
import styled from "styled-components";

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
  text = "text"
}

interface Props {
  children?: React.ReactNode;
  color: Color;
  type: Type;
  // event?: React.ReactEventHandler;// TODO: 处理事件
}

function Button(props: Props) {
  const { color, hoverColor } = initColor(props.color);
  initType(props.type);
  const ButtonStyle = styled.button`
    box-sizing: border-box;
    margin: 8px;
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 4px;
    line-height: 1.5;
    color: #ffffff;
    ${color}
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    user-select: none;
    :hover {
      ${hoverColor};
    }
  `;

  return <ButtonStyle type="button">{props.children}</ButtonStyle>;
}

Button.defaultProps = {
  color: Color.default,
  type: Type.text
};

function initColor(color: Color): UseColor {
  let _color, hoverColor: string;
  if (color === Color.default) {
    _color = "#c0c4c3"; // 月影白
    hoverColor = "#a4aca7"; // 冰山蓝
  } else if (color === Color.primary) {
    _color = "#5698c3"; // 晴蓝
    hoverColor = "#2177b8"; // 虹蓝
  } else if (color === Color.secondary) {
    _color = "#f07c82"; // 香叶红
    hoverColor = "#c04851"; // 玉红
  } else {
    _color = "#c4cbcf";
    hoverColor = "#2177b8";
  }
  return {
    color: `background: ${_color};`,
    hoverColor: `background-color: ${hoverColor};`
  };
}

function initType(type: Type) {
  switch (type) {
    case Type.text: {
      return;
    }
  }
}

export default Button;
