import * as React from "react";
import { calculateLines, transformTextToSpecifications } from ".";
import { findLineBreaks } from "./justify/knuthPlass";
import { measure } from "./justify/measure";

export type UseJustifiedTextArgs = {
  text: string;
};

type UseJustifiedTextType = (args: UseJustifiedTextArgs) => {
  lines: { text: string; wordSpacing: number }[] | null;
  isJustified: boolean;
  ref: React.LegacyRef<HTMLParagraphElement>;
};

export const useJustifiedText: UseJustifiedTextType = ({ text }) => {
  const [lines, setLines] = React.useState<
    | {
        text: string;
        wordSpacing: number;
      }[]
    | null
  >(null);
  const ref = React.useRef<HTMLParagraphElement>();
  React.useEffect(() => {
    if (ref.current) {
      const specs = transformTextToSpecifications(text, measure(ref.current));
      const breakpoints = findLineBreaks(specs, 320);
      const calculatedLines = calculateLines(specs, 320, breakpoints);
      setLines(calculatedLines);
    }
  }, [text]);

  return {
    isJustified: lines != null,
    lines,
    ref: ref as React.LegacyRef<HTMLParagraphElement>,
  };
};
