import React, { Component, ReactNode } from "react";
import * as Styles from "./styles.scss";

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

interface ITooltipState {
  display: string;
}

class Tooltip extends Component<ITooltipProps, ITooltipState> {
  public node: Element;
  public state: ITooltipState = {
    display: "none"
  };
  // private constructor(props: ITooltipProps) {
  //   super(props);
  //   this.node = document.createElement("div");
  //   window.document.body.appendChild(this.node);
  // }
  public showTooltip() {
    this.setState({
      display: "block"
    });
  }
  public hideTooltip() {
    this.setState({
      display: "none"
    });
  }
  public render() {
    return (
      <div
        className={Styles.container}
        onMouseOver={this.showTooltip.bind(this)}
        onMouseOut={this.hideTooltip.bind(this)}
      >
        {this.props.children}
        <div style={{ display: this.state.display }}>{this.props.title}</div>
      </div>
    );
  }
}

export default Tooltip;
