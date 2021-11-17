import * as React from "react";
import { Box, BoxProps } from "@kefas-ui/system";
import { useJustifiedText } from "../useJustifiedText";

export type WidthsMap = Map<string, number>;
export interface JustifiedProps extends BoxProps {
  children: string;
}

export const Justified = ({ children, ...props }: JustifiedProps) => {
  const { isJustified, lines, ref } = useJustifiedText({ text: children });

  console.log(isJustified);
  return (
    <>
      <Box ref={ref} as="p" {...props}>
        {isJustified
          ? lines?.map(({ text, wordSpacing }, idx) => {
              console.log(idx === lines.length - 1);
              const lineWordSpacing =
                idx === lines.length - 1 ? 0 : wordSpacing;
              console.log(lineWordSpacing);
              console.log(text);
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
    </>
  );
};
