import React from "react";
import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, Props } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

library.add(fab, faCheckSquare, faCoffee, faSpinner);

interface IIconProps extends Props {
  icon: IconProp;
}

class Icon extends React.Component<IIconProps, any> {
  static defaultProps = {
    icon: "coffee"
  };

  render() {
    const Icon = styled(FontAwesomeIcon)``;
    return <Icon {...this.props} />;
  }
}

export default Icon;
