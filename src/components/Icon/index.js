import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
library.add(fab, faCheckSquare, faCoffee, faSpinner);
class Icon extends React.Component {
    render() {
        const Icon = styled(FontAwesomeIcon) ``;
        return React.createElement(Icon, Object.assign({}, this.props));
    }
}
Icon.defaultProps = {
    icon: "coffee"
};
export default Icon;
