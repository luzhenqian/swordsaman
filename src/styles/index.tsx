// import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

function GlobalStyle(component: AnyStyledComponent) {
  return styled(component)`
    button: {
      cursor: pointer;
    }
  `;
}

export default GlobalStyle;
