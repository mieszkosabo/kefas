import * as React from "react";
import styled from "styled-components";
import { composedStyleFunctions } from "..";
import { HTMLKefasProps, KefasComponent } from "../types";

const BoxWrapper = styled.div`
  box-sizing: border-box;
  ${composedStyleFunctions}
`;

export type BoxProps = HTMLKefasProps<"div">;

export const Box: KefasComponent<"div"> = (props: BoxProps) => (
  <BoxWrapper m={0} minW={0} {...(props as any)} />
);
