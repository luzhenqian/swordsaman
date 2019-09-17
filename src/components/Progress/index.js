import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
class Progress extends Component {
    constructor() {
        super(...arguments);
        this.progressBarRef = React.createRef();
        this.progressInnerBarRef = React.createRef();
        this.container = document.createElement("div");
    }
    shouldComponentUpdate(newProps) {
        if (this.progressBarRef.current !== null &&
            this.progressInnerBarRef.current !== null) {
            this.progressInnerBarRef.current.style.width = `${(newProps.percent /
                newProps.value) *
                100}%`;
            this.progressInnerBarRef.current.style.backgroundColor =
                newProps.percent < 0 ? newProps.failedColor : newProps.color;
            this.progressBarRef.current.style.display = "block";
            if (newProps.percent / newProps.value >= 1 || newProps.percent < 0) {
                setTimeout(() => {
                    if (this.progressInnerBarRef.current !== null &&
                        this.progressBarRef.current !== null) {
                        this.progressInnerBarRef.current.style.width = "0%";
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
        if (this.props.percent / this.props.value >= 1 ||
            (this.props.percent < 0 && this.progressInnerBarRef.current !== null)) {
            setTimeout(() => {
                if (this.progressInnerBarRef.current !== null &&
                    this.progressBarRef.current !== null) {
                    this.progressInnerBarRef.current.style.width = "0%";
                    this.progressBarRef.current.style.display = "none";
                }
            }, this.props.duration);
        }
    }
    componentWillUnmount() {
        if (this.container !== null)
            this.container.remove();
    }
    render() {
        window.document.body.appendChild(this.container);
        const ProgressBar = styled.div `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2000;
      width: 100%;
      height: 2px;
    `;
        const ProgressInnerBar = styled.div `
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
            React.createElement(ProgressInnerBar, { ref: this.progressInnerBarRef })), this.container);
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
