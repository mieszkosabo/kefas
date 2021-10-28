import * as React from "react";
import { FlexProps } from "..";
import { Flex } from "../Flex";

export const FlexColumn = (props: FlexProps) => (
  <Flex direction="column" {...props} />
);
