import React, { Component } from "react";
import styled from "styled-components";
import Theme from "../../styles/theme";
import R from "ramda";
import Icon from "../Icon";
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
export var Size;
(function (Size) {
    Size["large"] = "large";
    Size["default"] = "default";
    Size["small"] = "small";
})(Size || (Size = {}));
class Input extends Component {
    constructor() {
        super(...arguments);
        this.InputRef = React.createRef();
    }
    componentDidMount() {
        if (this.InputRef.current !== null) {
            initAttrs(this.InputRef.current, {
                type: this.props.type,
                disabled: this.props.disabled,
                value: this.props.defaultValue,
                maxlength: this.props.maxlength,
                minlength: this.props.minlength
            });
        }
    }
    render() {
        const Input = createStyled(this.props);
        const InputContainer = styled.div `
      position: relative;
      width: 180px;
    `;
        const IconStyled = styled(Icon) `
      position: absolute;
      left: 5px;
      height: 100%;
      pointer-events: none;
      z-index: 2;
      color: ${Theme.colorTextPlaceholder};
    `;
        return (React.createElement(InputContainer, null,
            this.props.prefixIcon !== undefined ? (React.createElement(IconStyled, { icon: this.props.prefixIcon })) : null,
            React.createElement(Input, { ref: this.InputRef, onChange: this.props.onChange })));
    }
}
Input.defaultProps = {
    type: Type.text,
    defaultValue: "",
    onChange: Function.prototype,
    size: Size.default,
    disabled: false
};
function initAttrs(element, attrs) {
    Object.keys(attrs).forEach(key => {
        element[key] = attrs[key];
    });
}
function createStyled(props) {
    return R.pipe(createBaseStyled, R.curry(createStyledByStatus)(R.__, props.disabled), R.curry(createStyledByIcon)(R.__, props.prefixIcon !== undefined, props.suffixIcon !== undefined), R.curry(createStyledBySize)(R.__, props.size))();
}
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
    ::placeholder {
      color: ${Theme.colorTextPlaceholder};
    }
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
function createStyledByStatus(component, disabled) {
    if (disabled) {
        return styled(component) `
      background-color: ${Theme.backgroundColorBase};
      border-color: ${Theme.borderColorBase};
      color: #c0c4cc;
      cursor: not-allowed;
      :hover {
        border-color: ${Theme.borderColorBase};
      }
    `;
    }
    else {
        return component;
    }
}
function createStyledByIcon(component, prefixIcon, suffixIcon) {
    if (prefixIcon) {
        return styled(component) `
      padding-left: 40px;
    `;
    }
    if (suffixIcon) {
        return styled(component) `
      padding-right: 40px;
    `;
    }
    return component;
}
function createStyledBySize(component, size) {
    switch (size) {
        case Size.default:
        default: {
            return component;
        }
        case Size.large: {
            return styled(component) `
        height: 40px;
      `;
        }
        case Size.small: {
            return styled(component) `
        height: 24px;
      `;
        }
    }
}
export default Input;
