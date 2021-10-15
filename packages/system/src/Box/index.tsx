import styled from "styled-components";
import {
  color,
  compose,
  space,
  typography,
  grid,
  border,
  position,
  background,
  shadow,
  layout,
} from "../styleFunctions";

export const Box = styled.div.attrs((props) => ({
  boxSizing: "border-box",
  margin: 0,
  minWidth: 0,
  ...props,
}))`
  ${compose(
    color,
    space,
    typography,
    grid,
    background,
    border,
    position,
    shadow,
    layout
  )}
`;
