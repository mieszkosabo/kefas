import { Token } from "@kefas-ui/theming";
import * as CSSTypes from "csstype";
export { typography } from "styled-system";

export type TypographyProps = Partial<{
  fontFamily: Token<CSSTypes.Property.FontFamily, "fonts">;
  fontSize: Token<CSSTypes.Property.FontSize | number, "fontSizes">;
  fontWeight: Token<CSSTypes.Property.FontWeight, "fontWeights">;
  lineHeight: Token<CSSTypes.Property.LineHeight, "lineHeights">;
  letterSpacing: Token<CSSTypes.Property.LetterSpacing, "letterSpacings">;
  textAlign: Token<CSSTypes.Property.TextAlign>;
  fontStyle: Token<CSSTypes.Property.FontStyle>;
}>;
