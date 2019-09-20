import React, { Component } from "react";
import styled from "styled-components";
import Theme from "../../styles/theme/index";

export enum Type {
  text = "text",
  password = "password",
  textarea = "textarea",
  url = "url",
  email = "email",
  date = "date",
  number = "number",
  tel = "tel"
}

interface Props {
  children?: React.ReactNode;
  type: Type; // 原生type
  defaultValue?: string; // 默认值
  disabled?: boolean; // 是否禁用
  value?: string; // 输入框内容
}

class Input extends Component<Props, any> {
  static defaultProps = {
    type: Type.text
  };
  render() {
    const Input = createBaseStyled();
    return <Input type="text">{this.props.children}</Input>;
  }
}

function createBaseStyled() {
  return styled.input`
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid ${Theme.borderColorBase};
    border-radius: 4px;
    color: ${Theme.colorTextPrimary};
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    text-overflow: ellipsis;
    transition: all 0.3s ease-in-out;
    overflow: visible;
    :hover {
      border-color: ${Theme.colorPrimary};
    }
    :focus {
      border-color: #40a9ff;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  `;
}

export default Input;
