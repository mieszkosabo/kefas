import { Token } from "@kefas-ui/theming";
import * as CSSTypes from "csstype";
export { shadow } from "styled-system";

export type ShadowProps = Partial<{
  textShadow: Token<CSSTypes.Property.TextShadow, "shadows">;
  boxShadow: Token<CSSTypes.Property.BoxShadow, "shadows">;
}>;
