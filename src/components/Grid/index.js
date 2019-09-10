import React from "react";
class Grid extends React.Component {
    render() {
        console.log("children:", this.props.children);
        return React.createElement("div", null, this.props.children);
    }
}
Grid.defaultProps = {
    container: false,
    item: false
};
export default Grid;
