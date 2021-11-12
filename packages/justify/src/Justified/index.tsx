import * as React from "react";
import { Box, BoxProps } from "@kefas-ui/system";
import { CalculateWidths } from "../CalculateWidths";
import { useJustifiedText } from "../useJustifiedText";

export type WidthsMap = Map<string, number>;
export interface JustifiedProps extends BoxProps {
  children: string;
}

export const Justified = ({ children, ...props }: JustifiedProps) => {
  const [widths, setWidths] = React.useState<WidthsMap | null>(null);
  const { isJustified, html } = useJustifiedText({ text: children, widths });

  return (
    <>
      {isJustified ? (
        html
      ) : (
        <Box as="p" {...props}>
          {children}
        </Box>
      )}
      <CalculateWidths text={children} setWidths={setWidths} {...props} />
    </>
  );
};
