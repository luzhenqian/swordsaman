import React, { ReactNode, Component } from "react";
import styled from "styled-components";

export enum Placement {
  "bottom-end" = "bottom-end",
  "bottom-start" = "bottom-start",
  "bottom" = "bottom",
  "left-end" = "left-end",
  "left-start" = "left-start",
  "left" = "left",
  "right-end" = "right-end",
  "right-start" = "right-start",
  "right" = "right",
  "top-end" = "top-end",
  "top-start" = "top-start",
  "top" = "top"
}

interface ITooltipProps {
  children: any;
  title: ReactNode; // FIXME:或者是函数
  style?: object; // 覆盖或扩展样式
  onOpen?: Function; // 在提示框显示时触发
  onClose?: Function; // 在提示框消失时触发
  placement: Placement; // 出现的位置
}

class Tooltip extends Component<ITooltipProps, any> {
  static defaultProps = {
    placement: Placement["bottom"]
  };
  containerRef: React.RefObject<HTMLDivElement>;
  tooltipPopperRef: React.RefObject<HTMLDivElement>;
  constructor(props: ITooltipProps) {
    super(props);
    this.containerRef = React.createRef();
    this.tooltipPopperRef = React.createRef();
    this.state = {
      style: { display: "none", opacity: 0 },
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
  showTooltip = () => {
    this.setState({ style: { display: "block", opacity: 1 } });
    this.setStyleProperty();
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  };
  setStyleProperty = () => {
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
        const endLeft = `${this.containerRef.current.offsetLeft +
          this.containerRef.current.offsetWidth}px`;
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
  hideTooltip = () => {
    this.setState({ style: { display: "none", opacity: 0 } });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };
  componentDidMount() {
    // FIXME: 无法通过DidMount获取元素
    this.loadWH();
  }
  componentDidUpdate() {
    this.loadWH();
  }
  loadWH = () => {
    // FIXME:更新状态后，无法获取到宽度
    if (this.tooltipPopperRef.current !== null) {
      if (
        this.tooltipPopperRef.current.offsetWidth !== 0 &&
        this.tooltipPopperRef.current.offsetWidth !== this.state.wh.width &&
        this.tooltipPopperRef.current.offsetHeight !== 0 &&
        this.tooltipPopperRef.current.offsetHeight !== this.state.wh.height
      ) {
        this.setState({
          wh: {
            width: this.tooltipPopperRef.current.offsetWidth,
            height: this.tooltipPopperRef.current.offsetHeight
          }
        });
      }
    }
  };
  render() {
    const Container = styled.div`
      display: inline-block;
    `;
    const TooltipPopper = styled.div`
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
      <Container
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
        ref={this.containerRef}
        style={{ ...this.props.style }}
      >
        {/* FIXME: onMouseEnter 和 onMouseLeave 之后，子组件会被重绘，对应的state也会重置 */}
        {this.props.children}
        <TooltipPopper
          ref={this.tooltipPopperRef}
          style={{ ...this.state.style }}
        >
          {this.props.title}
        </TooltipPopper>
      </Container>
    );
  }
}

export default Tooltip;
