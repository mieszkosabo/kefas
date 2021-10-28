import { SanitizeCSS } from "@kefas-ui/sanitize-css";
import * as React from "react";
import { ThemeProvider } from "styled-components";

export type KefasProviderProps = {
  sanitize?: boolean;
};

export const KefasProvider = ({ sanitize }: KefasProviderProps) => (
  <ThemeProvider theme={{}}>{sanitize && <SanitizeCSS />}</ThemeProvider>
);
// TODO: add default theme
