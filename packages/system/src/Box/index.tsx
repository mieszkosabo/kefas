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
import { HTMLKefasProps, KefasComponent } from "../types";

const BoxWrapper = styled.div`
  box-sizing: border-box;
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

export type BoxProps = HTMLKefasProps<"div">;

export const Box: KefasComponent<"div"> = (props: BoxProps) => (
  <BoxWrapper m={0} minW={0} {...(props as any)} />
);
