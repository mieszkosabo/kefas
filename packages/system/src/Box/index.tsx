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
import type { As } from "@kefas-ui/theming";

const BoxWrapper = styled.div.attrs((props_) => ({
  boxSizing: "border-box",
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

export type BoxProps<T extends React.ElementType = "div"> = As<T> &
  KefasBaseProps &
  React.ComponentPropsWithoutRef<T>;

export const Box = <T extends React.ElementType = "div">(
  props: BoxProps<T>
) => <BoxWrapper m={0} minW={0} {...(props as any)} />;

// TODO: delete everything below this
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const test = () => (
  <Box as="img" m={2} src="elo" key="elo" onClick={() => {}} />
);

interface CoolButton extends BoxProps {
  color: string;
}

const Btn = (props: CoolButton) => (
  <Box as="img" key="yto" src="aaa" {...props} />
);
