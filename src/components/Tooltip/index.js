import React, { Component } from "react";
import styled from "styled-components";
export var Placement;
(function (Placement) {
    Placement["bottom-end"] = "bottom-end";
    Placement["bottom-start"] = "bottom-start";
    Placement["bottom"] = "bottom";
    Placement["left-end"] = "left-end";
    Placement["left-start"] = "left-start";
    Placement["left"] = "left";
    Placement["right-end"] = "right-end";
    Placement["right-start"] = "right-start";
    Placement["right"] = "right";
    Placement["top-end"] = "top-end";
    Placement["top-start"] = "top-start";
    Placement["top"] = "top";
})(Placement || (Placement = {}));
class Tooltip extends Component {
    constructor(props) {
        super(props);
        this.showTooltip = () => {
            this.setState({ style: { display: "block", opacity: 1 } });
            if (this.tooltipPopperRef.current !== null) {
                if (this.tooltipPopperRef.current.offsetWidth !== 0 &&
                    this.tooltipPopperRef.current.offsetHeight !== 0)
                    this.setStyleProperty();
            }
            if (this.props.onOpen) {
                this.props.onOpen();
            }
        };
        this.setStyleProperty = () => {
            if (this.containerRef.current !== null) {
                if (this.tooltipPopperRef.current !== null) {
                    const topTop = `${this.containerRef.current.offsetTop -
                        this.state.wh.height -
                        10}px`;
                    const startTop = `${this.containerRef.current.offsetTop}px`;
                    const centerTop = `${this.containerRef.current.offsetTop +
                        this.containerRef.current.offsetHeight / 2 -
                        this.state.wh.height / 2}px`;
                    const endTop = `${this.containerRef.current.offsetTop +
                        this.containerRef.current.offsetHeight}px`;
                    const bottomTop = `${this.containerRef.current.offsetTop +
                        this.containerRef.current.offsetHeight +
                        10}px`;
                    const leftLeft = `${this.containerRef.current.offsetLeft -
                        this.state.wh.width -
                        10}px`;
                    const startLeft = `${this.containerRef.current.offsetLeft}px`;
                    const centerLeft = `${this.containerRef.current.offsetLeft +
                        this.containerRef.current.offsetWidth / 2 -
                        this.state.wh.width / 2}px`;
                    const endLeft = `${this.containerRef.current.offsetLeft -
                        (this.tooltipPopperRef.current.offsetWidth -
                            this.containerRef.current.offsetWidth)}px`;
                    const rightLeft = `${this.containerRef.current.offsetLeft +
                        this.containerRef.current.offsetWidth +
                        10}px`;
                    switch (this.props.placement) {
                        case Placement.bottom: {
                            this.setState({
                                tl: {
                                    top: bottomTop,
                                    left: centerLeft
                                }
                            });
                            break;
                        }
                        case Placement["bottom-start"]: {
                            this.setState({
                                tl: {
                                    top: bottomTop,
                                    left: startLeft
                                }
                            });
                            break;
                        }
                        case Placement["bottom-end"]: {
                            this.setState({
                                tl: {
                                    top: bottomTop,
                                    left: endLeft
                                }
                            });
                            break;
                        }
                        case Placement.top: {
                            this.setState({
                                tl: {
                                    top: topTop,
                                    left: centerLeft
                                }
                            });
                            break;
                        }
                        case Placement["top-start"]: {
                            this.setState({
                                tl: {
                                    top: topTop,
                                    left: startLeft
                                }
                            });
                            break;
                        }
                        case Placement["top-end"]: {
                            this.setState({
                                tl: {
                                    top: topTop,
                                    left: endLeft
                                }
                            });
                            break;
                        }
                        case Placement.left: {
                            this.setState({
                                tl: {
                                    top: centerTop,
                                    left: leftLeft
                                }
                            });
                            break;
                        }
                        case Placement["left-start"]: {
                            this.setState({
                                tl: {
                                    top: startTop,
                                    left: leftLeft
                                }
                            });
                            break;
                        }
                        case Placement["left-end"]: {
                            this.setState({
                                tl: {
                                    top: endTop,
                                    left: leftLeft
                                }
                            });
                            break;
                        }
                        case Placement.right: {
                            this.setState({
                                tl: {
                                    top: centerTop,
                                    left: rightLeft
                                }
                            });
                            break;
                        }
                        case Placement["right-start"]: {
                            this.setState({
                                tl: {
                                    top: startTop,
                                    left: rightLeft
                                }
                            });
                            break;
                        }
                        case Placement["right-end"]: {
                            this.setState({
                                tl: {
                                    top: endTop,
                                    left: rightLeft
                                }
                            });
                            break;
                        }
                    }
                }
            }
        };
        this.hideTooltip = () => {
            this.setState({ style: { display: "none", opacity: 0 } });
            if (this.props.onClose) {
                this.props.onClose();
            }
        };
        this.loadWH = () => {
            // FIXME:更新状态后，无法获取到宽度
            if (this.tooltipPopperRef.current !== null) {
                if (this.tooltipPopperRef.current.offsetWidth !== 0 &&
                    this.tooltipPopperRef.current.offsetWidth !== this.state.wh.width &&
                    this.tooltipPopperRef.current.offsetHeight !== 0 &&
                    this.tooltipPopperRef.current.offsetHeight !== this.state.wh.height) {
                    this.setState({
                        wh: {
                            width: this.tooltipPopperRef.current.offsetWidth,
                            height: this.tooltipPopperRef.current.offsetHeight
                        }
                    });
                }
            }
        };
        this.containerRef = React.createRef();
        this.tooltipPopperRef = React.createRef();
        this.state = {
            style: { display: "block", opacity: 0, pointerEvents: "none" },
            wh: {
                width: "0",
                height: "0"
            },
            tl: {
                top: "0px",
                left: "0px"
            }
        };
    }
    componentDidMount() {
        // FIXME: 无法通过DidMount获取元素宽高
        this.loadWH();
    }
    componentDidUpdate() {
        this.loadWH();
    }
    render() {
        const Container = styled.div `
      display: inline-block;
    `;
        const TooltipPopper = styled.div `
      position: absolute;
      top: ${this.state.tl.top};
      left: ${this.state.tl.left};
      z-index: 1500;
      border-radius: 4px;
      padding: 4px 8px;
      max-width: 300px;
      white-space: pre-wrap;
      text-align: justify;
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      font-weight: 500;
      font-size: 0.625rem;
      transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `;
        return (
        // FIXME: 鼠标移动过快时，会导致事件冲突，onMouseLeave 事件不能被正确触发
        React.createElement(Container, { onMouseEnter: this.showTooltip, onMouseLeave: this.hideTooltip, ref: this.containerRef, style: Object.assign({}, this.props.style) },
            this.props.children,
            React.createElement(TooltipPopper, { ref: this.tooltipPopperRef, style: Object.assign({}, this.state.style) }, this.props.title)));
    }
}
Tooltip.defaultProps = {
    placement: Placement["bottom"]
};
export default Tooltip;
