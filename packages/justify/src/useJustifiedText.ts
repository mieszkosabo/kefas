import * as React from "react";
import { findLineBreaks, Config } from "./algorithms/findLineBreaks";
import {
  calculateLines,
  transformTextToSpecifications,
} from "./algorithms/transformations";
import { measure } from "./measure";
import enUsPatterns from 'hyphenation.en-us';
import { createHypenator } from "./hyphenate";
import { Patterns } from "hypher";

export type UseJustifiedTextArgs = {
  text: string;
  hypenate?: boolean;
  patterns?: Patterns;
  config?: Partial<Config>
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

export const useJustifiedText: UseJustifiedTextType = ({ text, patterns, hypenate = true, config = {} }) => {
  const [lines, setLines] = React.useState<
    | {
        text: string;
        wordSpacing: number;
      }[]
    | null
  >(null);
  const ref = React.useRef<HTMLParagraphElement>();
  const hyphenFn = createHypenator(patterns ?? enUsPatterns);
  React.useEffect(() => {
    if (ref.current) {
        const specs = transformTextToSpecifications(text, measure(ref.current), hypenate ? hyphenFn : undefined);
        const breakpoints = findLineBreaks(specs, 320, config);
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
