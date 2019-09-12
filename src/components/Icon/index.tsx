import React from "react";
// import * as R from "ramda";
import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

library.add(fab, faCheckSquare, faCoffee, faSpinner);

interface IconProps {
  children: React.ReactNode;
  icon: IconProp;
}

class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    children: null,
    icon: "coffee"
  };

  render() {
    const Icon = styled(FontAwesomeIcon)``;
    return <Icon icon={this.props.icon} />;
  }
}

export default Icon;
