import * as React from "react";
import { transformTextToSpecifications } from ".";
import { WidthsMap } from "./Justified";

export type UseJustifiedTextArgs = {
  text: string;
  widths: WidthsMap | null;
};

type UseJustifiedTextType = (args: UseJustifiedTextArgs) => {
  html?: React.ReactNode;
  isJustified: boolean;
};

export const useJustifiedText: UseJustifiedTextType = ({ text, widths }) => {
  const [html, setHtml] = React.useState<React.ReactNode | null>(null);
  React.useEffect(() => {
    if (widths != null) {
      const specifications = transformTextToSpecifications(text, widths);
      console.log(JSON.stringify(specifications));
      // setHtml(justifed);
    }
  }, [text, widths]);

  return {
    isJustified: html != null,
    html: "justifued " + text,
  };
};
