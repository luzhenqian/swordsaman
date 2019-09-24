import React, { Component } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import Theme from "../../styles/theme";
import R from "ramda";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon";

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

export enum Size {
  large = "large",
  default = "default",
  small = "small"
}

interface Props {
  children?: React.ReactNode;
  type: Type; // 原生type
  defaultValue: string; // 默认值
  disabled: boolean; // 是否禁用
  clearable?: boolean; // 是否可清空
  showPassword?: boolean; // 密码框是否可切换显示隐藏
  prefixIcon?: IconProp; // 首部图标
  suffixIcon?: IconProp; // 尾部图标
  autosize?: boolean; // 自适应高度
  size: Size; // 尺寸
  autocomplete?: string; // 自动完成，可以自定义模板
  value?: string; // 输入框内容
  maxlength?: string; // 原生属性
  minlength?: string; // 原生属性
  onChange: Function; // 内容变化后的回调
}

class Input extends Component<Props, any> {
  static defaultProps = {
    type: Type.text,
    defaultValue: "",
    onChange: Function.prototype,
    size: Size.default,
    disabled: false
  };
  private InputRef = React.createRef<HTMLInputElement>();

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
    const InputContainer = styled.div`
      position: relative;
      width: 180px;
    `;
    const IconStyled = styled(Icon)`
      position: absolute;
      left: 5px;
      height: 100%;
      pointer-events: none;
      z-index: 2;
      color: ${Theme.colorTextPlaceholder};
    `;
    return (
      <InputContainer>
        {this.props.prefixIcon !== undefined ? (
          <IconStyled icon={this.props.prefixIcon} />
        ) : null}
        <Input ref={this.InputRef} onChange={this.props.onChange} />
      </InputContainer>
    );
  }
}

function initAttrs(element: HTMLElement, attrs: object) {
  Object.keys(attrs).forEach(key => {
    element[key] = attrs[key];
  });
}

function createStyled(props: Props) {
  return R.pipe(
    createBaseStyled,
    R.curry(createStyledByStatus)(R.__, props.disabled),
    R.curry(createStyledByIcon)(
      R.__,
      props.prefixIcon !== undefined,
      props.suffixIcon !== undefined
    ),
    R.curry(createStyledBySize)(R.__, props.size)
  )();
}

function createBaseStyled(): AnyStyledComponent {
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

function createStyledByStatus(
  component: AnyStyledComponent,
  disabled: boolean
) {
  if (disabled) {
    return styled(component)`
      background-color: ${Theme.backgroundColorBase};
      border-color: ${Theme.borderColorBase};
      color: #c0c4cc;
      cursor: not-allowed;
      :hover {
        border-color: ${Theme.borderColorBase};
      }
    `;
  } else {
    return component;
  }
}

function createStyledByIcon(
  component: AnyStyledComponent,
  prefixIcon: boolean,
  suffixIcon: boolean
) {
  if (prefixIcon) {
    return styled(component)`
      padding-left: 40px;
    `;
  }
  if (suffixIcon) {
    return styled(component)`
      padding-right: 40px;
    `;
  }
  return component;
}

function createStyledBySize(component: AnyStyledComponent, size: Size) {
  switch (size) {
    case Size.default:
    default: {
      return component;
    }
    case Size.large: {
      return styled(component)`
        height: 40px;
      `;
    }
    case Size.small: {
      return styled(component)`
        height: 24px;
      `;
    }
  }
}

export default Input;
