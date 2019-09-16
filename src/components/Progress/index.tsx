import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface IProgressProps {
  value: number; // 进度条最大值
  percent: number; // 当前百分比
  color: string; // 正常状态进度条颜色
  failedColor: string; // 失败状态进度条颜色
  duration: number; // 进度条消失延迟
}

class Progress extends Component<IProgressProps, any> {
  static defaultProps = {
    value: 100,
    percent: 0,
    color: "blue",
    failedColor: "red",
    duration: 800
  };

  private progressBarRef = React.createRef<HTMLDivElement>();
  private progressBarInnerRef = React.createRef<HTMLDivElement>();
  private body = window.document.body;

  shouldComponentUpdate(newProps: IProgressProps) {
    if (
      this.progressBarRef.current !== null &&
      this.progressBarInnerRef.current !== null
    ) {
      this.progressBarInnerRef.current.style.width = `
        ${
          newProps.percent < 0
            ? "100%"
            : `${(newProps.percent / newProps.value) * 100}%`
        }
      `;
      this.progressBarInnerRef.current.style.backgroundColor =
        newProps.percent < 0 ? newProps.failedColor : newProps.color;
      this.progressBarRef.current.style.display = "block";
      if (newProps.percent / newProps.value > 1 || newProps.percent < 0) {
        setTimeout(() => {
          if (this.progressBarRef.current !== null) {
            this.progressBarRef.current.style.display = "none";
          }
        }, newProps.duration);
      }
      return false;
    } else {
      return true;
    }
  }

  componentDidMount() {
    if (
      this.props.percent / this.props.value > 1 ||
      (this.props.percent < 0 && this.progressBarInnerRef.current !== null)
    ) {
      setTimeout(() => {
        if (this.progressBarRef.current !== null) {
          this.progressBarRef.current.style.display = "none";
        }
      }, this.props.duration);
    }
  }

  componentWillUnmount() {
    // FIXME: 这里经常报以下错误，原因未知：
    // Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
    if (this.progressBarRef.current !== null)
      this.body.removeChild(this.progressBarRef.current);
  }

  render() {
    const ProgressBar = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2000;
      width: 100%;
      height: 2px;
    `;
    const ProgressBarInner = styled.div`
      height: 100%;
      transition: width 0.2s linear;
      width: ${this.props.percent < 0
        ? "100%"
        : `${(this.props.percent / this.props.value) * 100}%`};
      background-color: ${this.props.percent < 0
        ? this.props.failedColor
        : this.props.color};
    `;
    return createPortal(
      <ProgressBar ref={this.progressBarRef}>
        <ProgressBarInner ref={this.progressBarInnerRef} />
      </ProgressBar>,
      this.body
    );
  }
}

export default Progress;
