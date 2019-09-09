import React, { ReactNode, useState, useEffect, useRef } from "react";
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

const Tooltip = (props: ITooltipProps) => {
  const [style, setStyle] = useState({ display: "block", opacity: 0 });
  const [wh, setWH] = useState({ width: 0, height: 0 });
  const [tl, setTL] = useState({ top: "0", left: "0" });
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipPopperRef = useRef<HTMLDivElement>(null);
  const showTooltip = () => {
    setStyle({ display: "block", opacity: 1 });
    setStyleProperty();
    if (props.onOpen) {
      props.onOpen();
    }
  };
  const setStyleProperty = () => {
    if (containerRef.current !== null) {
      if (tooltipPopperRef.current !== null) {
        const topTop = `${containerRef.current.offsetTop - wh.height - 10}px`;
        const startTop = `${containerRef.current.offsetTop}px`;
        const centerTop = `${containerRef.current.offsetTop +
          containerRef.current.offsetHeight / 2 -
          wh.height / 2}px`;
        const endTop = `${containerRef.current.offsetTop +
          containerRef.current.offsetHeight}px`;
        const bottomTop = `${containerRef.current.offsetTop +
          containerRef.current.offsetHeight +
          10}px`;

        const leftLeft = `${containerRef.current.offsetLeft - wh.width - 10}px`;
        const startLeft = `${containerRef.current.offsetLeft}px`;
        const centerLeft = `${containerRef.current.offsetLeft +
          containerRef.current.offsetWidth / 2 -
          wh.width / 2}px`;
        const endLeft = `${containerRef.current.offsetLeft +
          containerRef.current.offsetWidth}px`;
        const rightLeft = `${containerRef.current.offsetLeft +
          containerRef.current.offsetWidth +
          10}px`;
        switch (props.placement) {
          case Placement.bottom: {
            setTL({
              top: bottomTop,
              left: centerLeft
            });
            break;
          }
          case Placement["bottom-start"]: {
            setTL({
              top: bottomTop,
              left: startLeft
            });
            break;
          }
          case Placement["bottom-end"]: {
            setTL({
              top: bottomTop,
              left: endLeft
            });
            break;
          }
          case Placement.top: {
            setTL({
              top: topTop,
              left: centerLeft
            });
            break;
          }
          case Placement["top-start"]: {
            setTL({
              top: topTop,
              left: startLeft
            });
            break;
          }
          case Placement["top-end"]: {
            setTL({
              top: topTop,
              left: endLeft
            });
            break;
          }
          case Placement.left: {
            setTL({
              top: centerTop,
              left: leftLeft
            });
            break;
          }
          case Placement["left-start"]: {
            setTL({
              top: startTop,
              left: leftLeft
            });
            break;
          }
          case Placement["left-end"]: {
            setTL({
              top: endTop,
              left: leftLeft
            });
            break;
          }
          case Placement.right: {
            setTL({
              top: centerTop,
              left: rightLeft
            });
            break;
          }
          case Placement["right-start"]: {
            setTL({
              top: startTop,
              left: rightLeft
            });
            break;
          }
          case Placement["right-end"]: {
            setTL({
              top: endTop,
              left: rightLeft
            });
            break;
          }
        }
      }
    }
  };
  const hideTooltip = () => {
    setStyle({ display: "none", opacity: 0 });
    if (props.onClose) {
      props.onClose();
    }
  };
  const loadWH = () => {
    // FIXME:更新状态后，无法获取到宽度
    if (tooltipPopperRef.current !== null) {
      if (
        tooltipPopperRef.current.offsetWidth !== 0 &&
        tooltipPopperRef.current.offsetWidth !== wh.width &&
        tooltipPopperRef.current.offsetHeight !== 0 &&
        tooltipPopperRef.current.offsetHeight !== wh.height
      ) {
        setWH({
          width: tooltipPopperRef.current.offsetWidth,
          height: tooltipPopperRef.current.offsetHeight
        });
      }
    }
  };
  const Container = styled.div`
    display: inline-block;
  `;
  const TooltipPopper = styled.div`
    position: absolute;
    top: ${tl.top};
    left: ${tl.left};
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
  useEffect(() => {
    loadWH();
  });
  // 构建后好像不行哎。
  return (
    <Container
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      ref={containerRef}
      style={{ ...props.style }}
    >
      {/* FIXME: onMouseEnter 和 onMouseLeave 之后，子组件会被重绘，对应的state也会重置 */}
      {props.children}
      <TooltipPopper ref={tooltipPopperRef} style={{ ...style }}>
        {props.title}
      </TooltipPopper>
    </Container>
  );
};

Tooltip.defaultProps = {
  placement: Placement["bottom"]
};

export default Tooltip;
