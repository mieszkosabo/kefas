import { Token } from "@kefas-ui/theming";
import * as CSSTypes from "csstype";
export { background } from "styled-system";

export type BackgroundProps = Partial<{
  background: Token<CSSTypes.Property.Background>;
  backgroundImage: Token<CSSTypes.Property.BackgroundImage>;
  backgroundSize: Token<CSSTypes.Property.BackgroundSize>;
  backgroundPosition: Token<CSSTypes.Property.BackgroundPosition>;
  backgroundRepeat: Token<CSSTypes.Property.BackgroundRepeat>;
}>;
