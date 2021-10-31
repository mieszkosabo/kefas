import { SanitizeCSS } from "@kefas-ui/sanitize-css";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Global } from "./Global";

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
  const globals = theme?.global;

  return (
    <ThemeProvider theme={theme}>
      {sanitize && <SanitizeCSS />}
      <Global globals={globals} theme={theme} />
      {children}
    </ThemeProvider>
  );
};

KefasProvider.defaultProps = {
  sanitize: true,
  theme: {},
};
// TODO: add default theme
