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
  const { isJustified, lines } = useJustifiedText({ text: children, widths });

  console.log(isJustified);
  return (
    <>
      <Box as="p" {...props}>
        {isJustified
          ? lines?.map((l, idx) => (
              <span
                key={idx}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                {l}
              </span>
            ))
          : children}
      </Box>
      <CalculateWidths text={children} setWidths={setWidths} {...props} />
    </>
  );
};
