import * as React from "react";
import { findLineBreaks } from "./algorithms/findLineBreaks";
import {
  calculateLines,
  transformTextToSpecifications,
} from "./algorithms/transformations";
import { measure } from "./measure";

export type UseJustifiedTextArgs = {
  text: string;
};

export type UseJustifiedTextType = (args: UseJustifiedTextArgs) =>
  | {
      lines: null;
      isJustified: false;
      ref: React.LegacyRef<HTMLParagraphElement>;
    }
  | {
      lines: { text: string; wordSpacing: number }[];
      isJustified: true;
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

  return lines === null
    ? {
        isJustified: false,
        lines: null,
        ref: ref as React.LegacyRef<HTMLParagraphElement>,
      }
    : {
        isJustified: true,
        lines,
        ref: ref as React.LegacyRef<HTMLParagraphElement>,
      };
};
