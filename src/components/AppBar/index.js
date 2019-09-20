import React, { Component } from "react";
import styled from "styled-components";
class AppBar extends Component {
    render() {
        const AppBar = styled.div `
      position: fixed;
    `;
        return React.createElement(AppBar, null, this.props.children);
    }
}
export default AppBar;
