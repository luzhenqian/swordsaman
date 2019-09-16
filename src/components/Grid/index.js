import React from "react";
class Grid extends React.Component {
    render() {
        return React.createElement("div", null, this.props.children);
    }
}
Grid.defaultProps = {
    container: false,
    item: false
};
export default Grid;
