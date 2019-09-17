import React, { Component } from "react";
import styled from "styled-components";
import Divider from "../../components/Divider";
export var Shadow;
(function (Shadow) {
    Shadow["always"] = "always";
    Shadow["hover"] = "hover";
    Shadow["never"] = "never"; // 永远不显示
})(Shadow || (Shadow = {}));
class Card extends Component {
    render() {
        const Card = createStyledByShadow(styled.div `
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.87);
        transition: 0.3s;
      `, this.props.shadow);
        const CardHead = styled.div `
        padding: 20px;
      `, CardBody = styled.div `
        padding: 20px;
      `;
        return (React.createElement(Card, null,
            this.props.header !== undefined ? (React.createElement(React.Fragment, null,
                React.createElement(CardHead, null, this.props.header),
                React.createElement(Divider, null))) : null,
            React.createElement(CardBody, null, this.props.children)));
    }
}
Card.defaultProps = {
    shadow: Shadow.never
};
function createStyledByShadow(component, shadow) {
    switch (shadow) {
        case Shadow.never:
        default: {
            return component;
        }
        case Shadow.hover: {
            return styled(component) `
        :hover {
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 2px 1px -1px rgba(0, 0, 0, 0.12);
        }
      `;
        }
        case Shadow.always: {
            return styled(component) `
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 2px 1px -1px rgba(0, 0, 0, 0.12);
      `;
        }
    }
}
export default Card;
