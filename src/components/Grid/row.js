import React from "react";
import styled from "styled-components";
import Col from "./col";
import R from "ramda";
export var Justify;
(function (Justify) {
    Justify["start"] = "flex-start";
    Justify["end"] = "flex-end";
    Justify["center"] = "center";
    Justify["space-around"] = "space-around";
    Justify["space-between"] = "space-between";
})(Justify || (Justify = {}));
export var Align;
(function (Align) {
    Align["start"] = "flex-start";
    Align["end"] = "flex-end";
    Align["stretch"] = "stretch";
    Align["center"] = "center";
    Align["baseline"] = "baseline";
})(Align || (Align = {}));
class Row extends React.Component {
    render() {
        const Row = createStyled(this.props);
        return React.createElement(Row, null, renderChildren(this.props.children));
    }
}
Row.defaultProps = {
    gutter: 0,
    justify: Justify.start,
    align: Align.baseline
};
function renderChildren(children) {
    let render = [];
    React.Children.forEach(children, e => {
        if (e !== null && typeof e === "object") {
            if ("type" in e) {
                if (e.type === Col) {
                    render.push(e);
                }
            }
        }
    });
    return render;
}
function createStyled(props) {
    return R.pipe(createBaseStyled, R.curry(createStyledByJustify)(R.__, props.justify), R.curry(createStyledByAlign)(R.__, props.align), R.curry(createStyledByGutter)(R.__, props.gutter))();
}
function createBaseStyled() {
    return styled.div `
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    width: 100%;
  `;
}
function createStyledByJustify(component, justify) {
    return styled(component) `
    justify-content: ${justify};
  `;
}
function createStyledByAlign(component, align) {
    return styled(component) `
    align-items: ${align};
  `;
}
function createStyledByGutter(component, gutter) {
    if (typeof gutter === "number") {
        return styled(component) `
      & > div {
        padding: 0 ${gutter / 2}px;
      }
    `;
    }
    else if (typeof gutter === "object") {
        return styled(component) `
      & > div {
        @media screen and (max-width: 576px) {
          padding: 0 ${gutter.xs / 2}px;
        }
        @media screen and (min-width: 576px) {
          padding: 0 ${gutter.sm / 2}px;
        }
        @media screen and (min-width: 768px) {
          padding: 0 ${gutter.md / 2}px;
        }
        @media screen and (min-width: 992px) {
          padding: 0 ${gutter.lg / 2}px;
        }
        @media screen and (min-width: 1200px) {
          padding: 0 ${gutter.xl / 2}px;
        }
        @media screen and (min-width: 1600px) {
          padding: 0 ${gutter.xxl / 2}px;
        }
      }
    `;
    }
    return component;
}
export default Row;
