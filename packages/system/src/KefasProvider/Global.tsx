import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { composedStyleFunctions } from "..";

export const Global = ({
  globals,
  theme,
}: {
  globals: unknown;
  theme: unknown;
}) => {
  const globalStyles =
    typeof globals === "object"
      ? composedStyleFunctions({ ...globals, theme })
      : null;
  console.log(globalStyles);
  const GlobalStyles =
    globalStyles != null
      ? createGlobalStyle`html, body { ${globalStyles} }`
      : null;

  return GlobalStyles != null ? <GlobalStyles /> : null;
};
