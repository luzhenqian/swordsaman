import React, { ReactNode, useState, useEffect, useRef } from "react";
import Styles from "./styles.scss";

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
            tooltipPopperRef.current.style.top = bottomTop;
            tooltipPopperRef.current.style.left = centerLeft;
            break;
          }
          case Placement["bottom-start"]: {
            tooltipPopperRef.current.style.top = bottomTop;
            tooltipPopperRef.current.style.left = startLeft;
            break;
          }
          case Placement["bottom-end"]: {
            tooltipPopperRef.current.style.top = bottomTop;
            tooltipPopperRef.current.style.left = endLeft;
            break;
          }
          case Placement.top: {
            tooltipPopperRef.current.style.top = topTop;
            tooltipPopperRef.current.style.left = centerLeft;
            break;
          }
          case Placement["top-start"]: {
            tooltipPopperRef.current.style.top = topTop;
            tooltipPopperRef.current.style.left = startLeft;
            break;
          }
          case Placement["top-end"]: {
            tooltipPopperRef.current.style.top = topTop;
            tooltipPopperRef.current.style.left = endLeft;
            break;
          }
          case Placement.left: {
            tooltipPopperRef.current.style.top = centerTop;
            tooltipPopperRef.current.style.left = leftLeft;
            break;
          }
          case Placement["left-start"]: {
            tooltipPopperRef.current.style.top = startTop;
            tooltipPopperRef.current.style.left = leftLeft;
            break;
          }
          case Placement["left-end"]: {
            tooltipPopperRef.current.style.top = endTop;
            tooltipPopperRef.current.style.left = leftLeft;
            break;
          }
          case Placement.right: {
            tooltipPopperRef.current.style.top = centerTop;
            tooltipPopperRef.current.style.left = rightLeft;
            break;
          }
          case Placement["right-start"]: {
            tooltipPopperRef.current.style.top = startTop;
            tooltipPopperRef.current.style.left = rightLeft;
            break;
          }
          case Placement["right-end"]: {
            tooltipPopperRef.current.style.top = endTop;
            tooltipPopperRef.current.style.left = rightLeft;
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
  useEffect(() => {
    loadWH();
  });
  return (
    <div
      className={Styles.container}
      onMouseOver={showTooltip}
      onMouseOut={hideTooltip}
      ref={containerRef}
      style={{ ...props.style }}
    >
      {props.children}
      <div
        ref={tooltipPopperRef}
        className={Styles.tooltipPopper}
        style={{ ...style }}
      >
        {props.title}
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  placement: Placement["bottom"]
};

export default Tooltip;
