import React, { Component } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

class AppBar extends Component<Props, any> {
  render() {
    const AppBar = styled.div`
      position: fixed;
    `;
    return <AppBar>{this.props.children}</AppBar>;
  }
}

export default AppBar;
