import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
class Progress extends Component {
    constructor() {
        super(...arguments);
        this.progressBarRef = React.createRef();
        this.progressBarInnerRef = React.createRef();
        this.body = window.document.body;
    }
    shouldComponentUpdate(newProps) {
        if (this.progressBarRef.current !== null &&
            this.progressBarInnerRef.current !== null) {
            this.progressBarInnerRef.current.style.width = `
        ${newProps.percent < 0
                ? "100%"
                : `${(newProps.percent / newProps.value) * 100}%`}
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
        }
        else {
            return true;
        }
    }
    componentDidMount() {
        if (this.props.percent / this.props.value > 1 ||
            (this.props.percent < 0 && this.progressBarInnerRef.current !== null)) {
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
        const ProgressBar = styled.div `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2000;
      width: 100%;
      height: 2px;
    `;
        const ProgressBarInner = styled.div `
      height: 100%;
      transition: width 0.2s linear;
      width: ${this.props.percent < 0
            ? "100%"
            : `${(this.props.percent / this.props.value) * 100}%`};
      background-color: ${this.props.percent < 0
            ? this.props.failedColor
            : this.props.color};
    `;
        return createPortal(React.createElement(ProgressBar, { ref: this.progressBarRef },
            React.createElement(ProgressBarInner, { ref: this.progressBarInnerRef })), this.body);
    }
}
Progress.defaultProps = {
    value: 100,
    percent: 0,
    color: "blue",
    failedColor: "red",
    duration: 800
};
export default Progress;
