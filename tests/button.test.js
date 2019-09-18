import React from "react";
import Button from "../src/components/Button";
import renderer from "react-test-renderer";
import "jest-styled-components";

test("Button", () => {
  const component = renderer.create(<Button>按钮</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
