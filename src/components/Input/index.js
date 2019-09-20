import React, { Component } from "react";
import styled from "styled-components";
import Theme from "../../styles/theme/index";
export var Type;
(function (Type) {
    Type["text"] = "text";
    Type["password"] = "password";
    Type["textarea"] = "textarea";
    Type["url"] = "url";
    Type["email"] = "email";
    Type["date"] = "date";
    Type["number"] = "number";
    Type["tel"] = "tel";
})(Type || (Type = {}));
class Input extends Component {
    render() {
        const Input = createBaseStyled();
        return React.createElement(Input, { type: "text" }, this.props.children);
    }
}
Input.defaultProps = {
    type: Type.text
};
function createBaseStyled() {
    return styled.input `
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
