// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThemeTypings extends EmptyThemeTypings {}

interface EmptyThemeTypings {
  colors: "elo" | "yo";
  space: string;
  sizes: string;
  opacities: string;
  fonts: string;
  fontSizes: string;
  fontWeights: string;
  lineHeights: string;
  letterSpacings: string;
  borders: string;
  borderWidths: string;
  borderStyles: string;
  radii: string;
  zIndices: string;
  shadows: string;
}
