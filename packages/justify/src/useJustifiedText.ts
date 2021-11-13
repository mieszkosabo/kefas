import * as React from "react";
import { justify } from "./justify";

export type UseJustifiedTextArgs = {
  text: string;
};

type UseJustifiedTextType = (args: UseJustifiedTextArgs) => {
  lines: string[] | null;
  isJustified: boolean;
};

export const useJustifiedText: UseJustifiedTextType = ({ text }) => {
  const [lines, setLines] = React.useState<string[] | null>(null);
  React.useEffect(() => {
    setLines(justify(text, 320 / 7.8125));
  }, [text]);

  return {
    isJustified: lines != null,
    lines,
  };
};
