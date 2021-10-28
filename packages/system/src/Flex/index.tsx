import * as React from "react";
import { FlexboxProps } from "..";
import { Box, BoxProps } from "../Box";

export interface FlexProps extends BoxProps, FlexboxProps {}

export const Flex = (props: FlexProps) => <Box display="flex" {...props} />;
