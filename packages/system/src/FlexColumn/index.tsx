import * as React from "react";
import { FlexProps } from "..";
import { Flex } from "../Flex";

export const FlexCloumn = (props: FlexProps) => (
  <Flex direction="column" {...props} />
);
