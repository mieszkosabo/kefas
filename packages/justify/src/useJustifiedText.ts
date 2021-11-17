import * as React from "react";
import { WidthsMap } from "./Justified";
import { justify } from "./justify/justify";

export type UseJustifiedTextArgs = {
  text: string;
  widths: WidthsMap | null;
};

type UseJustifiedTextType = (args: UseJustifiedTextArgs) => {
  lines: string[] | null;
  isJustified: boolean;
};

export const useJustifiedText: UseJustifiedTextType = ({ text, widths }) => {
  const [lines, setLines] = React.useState<string[] | null>(null);
  React.useEffect(() => {
    if (widths != null) {
      setLines(justify(text, 42, widths));
    }
  }, [text, widths]);

  return {
    isJustified: lines != null,
    lines,
  };
};
