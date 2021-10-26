import { Token } from "@kefas-ui/theming";
import * as CSSTypes from "csstype";
export { space } from "styled-system";

// TODO: test if numbers get converted to px
export type SpaceProps = Partial<{
  margin: Token<CSSTypes.Property.Margin | number, "space">;
  m: Token<CSSTypes.Property.Margin | number, "space">;

  marginTop: Token<CSSTypes.Property.MarginTop | number, "space">;
  mt: Token<CSSTypes.Property.MarginTop | number, "space">;

  marginRight: Token<CSSTypes.Property.MarginRight | number, "space">;
  mr: Token<CSSTypes.Property.MarginRight | number, "space">;

  marginBottom: Token<CSSTypes.Property.MarginBottom | number, "space">;
  mb: Token<CSSTypes.Property.MarginBottom | number, "space">;

  marginLeft: Token<CSSTypes.Property.MarginLeft | number, "space">;
  ml: Token<CSSTypes.Property.MarginLeft | number, "space">;

  mx: Token<CSSTypes.Property.Margin | number, "space">;
  my: Token<CSSTypes.Property.Margin | number, "space">;

  padding: Token<CSSTypes.Property.Padding | number, "space">;
  p: Token<CSSTypes.Property.Padding | number, "space">;

  paddingTop: Token<CSSTypes.Property.PaddingTop | number, "space">;
  pt: Token<CSSTypes.Property.PaddingTop | number, "space">;

  paddingRight: Token<CSSTypes.Property.PaddingRight | number, "space">;
  pr: Token<CSSTypes.Property.PaddingRight | number, "space">;

  paddingBottom: Token<CSSTypes.Property.PaddingBottom | number, "space">;
  pb: Token<CSSTypes.Property.PaddingBottom | number, "space">;

  paddingLeft: Token<CSSTypes.Property.PaddingLeft | number, "space">;
  pl: Token<CSSTypes.Property.PaddingLeft | number, "space">;

  px: Token<CSSTypes.Property.Padding | number, "space">;
  py: Token<CSSTypes.Property.Padding | number, "space">;
}>;
