import * as React from "react";
import { FlexboxProps } from "..";
import { Box } from "../Box";
import { KefasBaseProps } from "../kefasProps";

interface KefasFlexProps extends KefasBaseProps, FlexboxProps {}

export interface FlexProps
  extends KefasFlexProps,
    Partial<Omit<React.HTMLProps<HTMLDivElement>, keyof KefasFlexProps>> {}
export const Flex = (props: FlexProps) => (
  <Box display="flex" {...(props as any)} />
);

// TODO: delete this
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const test = () => (
  <Flex
    color={["plum", "palevioletred"]}
    opacity={0.1}
    align="normal"
    justify="normal"
    bg={["papayawhip", "peru"]}
    key="elo"
    onClick={() => {}}
    alignItems="center"
  />
);
