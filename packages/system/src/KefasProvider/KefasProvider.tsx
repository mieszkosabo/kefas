import { SanitizeCSS } from "@kefas-ui/sanitize-css";
import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export type KefasProviderProps = {
  sanitize?: boolean;
  children?: React.ReactNode;
  theme?: any; // TODO: create theme object type
};

export const KefasProvider = ({
  sanitize,
  theme,
  children,
}: KefasProviderProps) => {
  const globalStyles = theme?.global;
  const GlobalStyles =
    globalStyles != null ? createGlobalStyle(globalStyles) : null;
  console.log(globalStyles);
  return (
    <ThemeProvider theme={theme}>
      {sanitize && <SanitizeCSS />}
      {GlobalStyles != null && <GlobalStyles />}
      {children}
    </ThemeProvider>
  );
};

KefasProvider.defaultProps = {
  sanitize: true,
  theme: {},
};
// TODO: add default theme
