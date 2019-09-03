import React, { Component, ReactNode } from "react";
import Styles from "./styles.scss";

export enum Placement {
  "bottom-end",
  "bottom-start",
  "bottom",
  "left-end",
  "left-start",
  "left",
  "right-end",
  "right-start",
  "right",
  "top-end",
  "top-start",
  "top"
}

interface ITooltipProps {
  title: string | ReactNode; // 或者是函数
  onOpen?: Function; // 在提示框显示时触发
  onClose?: Function; // 在提示框消失时触发
  placement?: Placement; // 出现的位置
}

interface ITooltipProps {}

class Tooltip extends Component<ITooltipProps, ITooltipProps> {
  public render() {
    return <div className={Styles.a}>{this.props.children}</div>;
  }
}

export default Tooltip;
