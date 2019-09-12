import React from "react";
// import * as R from "ramda";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faCheckSquare, faCoffee);
class Icon extends React.Component {
    render() {
        return React.createElement(FontAwesomeIcon, { icon: "coffee" });
    }
}
export default Icon;
