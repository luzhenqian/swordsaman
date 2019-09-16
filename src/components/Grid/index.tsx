import React from "react";

interface IGridProps {
  children: React.ReactNode;
  container: boolean;
  item: boolean;
  gutter?: number;
}

class Grid extends React.Component<IGridProps, any> {
  static defaultProps = {
    container: false,
    item: false
  };
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Grid;
