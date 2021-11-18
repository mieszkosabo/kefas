import * as React from "react";
import { Box, BoxProps } from "@kefas-ui/system";
import { useJustifiedText } from "../useJustifiedText";

export interface JustifiedProps extends BoxProps {
  children: string;
}

export const Justified = ({ children, ...props }: JustifiedProps) => {
  const { isJustified, lines, ref } = useJustifiedText({ text: children });

  return (
    <Box
      ref={ref}
      as="p"
      textAlign={isJustified ? undefined : "justify"}
      {...props}
    >
      {isJustified
        ? lines?.map(({ text, wordSpacing }, idx) => {
            const lineWordSpacing = idx === lines.length - 1 ? 0 : wordSpacing;
            return (
              <React.Fragment key={idx}>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    wordSpacing: lineWordSpacing,
                  }}
                >
                  {text}
                </span>
                <br />
              </React.Fragment>
            );
          })
        : children}
    </Box>
  );
};
