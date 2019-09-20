import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Theme from "../../styles/theme";
class LoadingBar extends Component {
    constructor() {
        super(...arguments);
        this.LoadingBar = React.createRef();
        this.LoadingInnerBar = React.createRef();
        this.container = document.createElement("div");
    }
    shouldComponentUpdate(newProps) {
        if (this.LoadingBar.current !== null &&
            this.LoadingInnerBar.current !== null) {
            this.LoadingInnerBar.current.style.width = `${newProps.percent >= 0 ? (newProps.percent / newProps.value) * 100 : 100}%`;
            this.LoadingInnerBar.current.style.backgroundColor =
                newProps.percent < 0 ? newProps.failedColor : newProps.color;
            this.LoadingBar.current.style.display = "block";
            if (newProps.percent / newProps.value >= 1 || newProps.percent < 0) {
                setTimeout(() => {
                    if (this.LoadingInnerBar.current !== null &&
                        this.LoadingBar.current !== null) {
                        this.LoadingInnerBar.current.style.width = "0%";
                        this.LoadingBar.current.style.display = "none";
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
            (this.props.percent < 0 && this.LoadingInnerBar.current !== null)) {
            setTimeout(() => {
                if (this.LoadingInnerBar.current !== null &&
                    this.LoadingBar.current !== null) {
                    this.LoadingInnerBar.current.style.width = "0%";
                    this.LoadingBar.current.style.display = "none";
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
        const LoadingBar = styled.div `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2000;
      width: 100%;
      height: 2px;
    `;
        const LoadingInnerBar = styled.div `
      height: 100%;
      transition: width 0.2s linear;
      width: ${this.props.percent < 0
            ? "100%"
            : `${(this.props.percent / this.props.value) * 100}%`};
      background-color: ${this.props.percent < 0
            ? this.props.failedColor
            : this.props.color};
    `;
        return createPortal(React.createElement(LoadingBar, { ref: this.LoadingBar },
            React.createElement(LoadingInnerBar, { ref: this.LoadingInnerBar })), this.container);
    }
}
LoadingBar.defaultProps = {
    value: 100,
    percent: 0,
    color: Theme.colorPrimary,
    failedColor: Theme.colorDanger,
    duration: 800
};
export default LoadingBar;
