import { Token } from "@kefas-ui/theming";
import * as CSSTypes from "csstype";
export { position } from "styled-system";

// TODO: add convertion from numbers to px
export type PositionProps = Partial<{
  position: Token<CSSTypes.Property.Position>;
  zIndex: Token<CSSTypes.Property.ZIndex, "zIndices">;
  top: Token<CSSTypes.Property.Top, "space">;
  right: Token<CSSTypes.Property.Right, "space">;
  bottom: Token<CSSTypes.Property.Bottom, "space">;
  left: Token<CSSTypes.Property.Left, "space">;
}>;
