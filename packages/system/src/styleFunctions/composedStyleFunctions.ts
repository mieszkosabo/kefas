import { compose } from "styled-system";
import {
  color,
  space,
  typography,
  grid,
  background,
  border,
  position,
  shadow,
  layout,
  flexbox,
} from ".";

export const composedStyleFunctions = compose(
  color,
  space,
  typography,
  grid,
  background,
  border,
  position,
  shadow,
  layout,
  flexbox
);
