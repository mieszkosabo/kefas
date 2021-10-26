import * as React from "react";
import styled from "styled-components";
import {
  color,
  compose,
  space,
  typography,
  grid,
  border,
  position,
  shadow,
  layout,
} from "../styleFunctions";
import { background } from "..";
import { KefasBaseProps } from "../kefasProps";

export interface BoxProps
  extends KefasBaseProps,
    Partial<Omit<React.HTMLProps<HTMLDivElement>, keyof KefasBaseProps>> {}
// TODO: ogarnąć "as" propa

const BoxWrapper = styled.div.attrs<BoxProps>((props_) => ({
  boxSizing: "border-box",
  margin: 0,
  minWidth: 0,
  ...props_,
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

export const Box = (props: BoxProps) => <BoxWrapper {...(props as any)} />;

const test = () => (
  <Box
    color={["plum", "yellow"]}
    opacity={0.1}
    align="normal"
    justify="normal"
    bg={["papayawhip", "peru"]}
    key="elo"
  />
);

console.log(test);
