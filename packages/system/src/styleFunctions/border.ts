import { Token } from "@kefas-ui/theming";
import * as CSSTypes from "csstype";
export { border } from "styled-system";

export type BorderProps = Partial<{
  border: Token<CSSTypes.Property.Border, "borders">;
  borderWidth: Token<CSSTypes.Property.BorderWidth, "borderWidths">;
  borderStyle: Token<CSSTypes.Property.BorderStyle, "borderStyles">;
  borderColor: Token<CSSTypes.Property.BorderColor, "colors">;
  borderRadius: Token<CSSTypes.Property.BorderRadius, "radii">;

  borderTop: Token<CSSTypes.Property.BorderTop, "borders">;
  borderTopWidth: Token<CSSTypes.Property.BorderTopWidth, "borderWidths">;
  borderTopStyle: Token<CSSTypes.Property.BorderTopStyle, "borderStyles">;
  borderTopColor: Token<CSSTypes.Property.BorderTopColor, "colors">;
  borderTopLeftRadius: Token<CSSTypes.Property.BorderTopLeftRadius, "radii">;
  borderTopRightRadius: Token<CSSTypes.Property.BorderTopRightRadius, "radii">;

  borderRight: Token<CSSTypes.Property.BorderRight, "borders">;
  borderRightWidth: Token<CSSTypes.Property.BorderRightWidth, "borderWidths">;
  borderRightStyle: Token<CSSTypes.Property.BorderRightStyle, "borderStyles">;
  borderRightColor: Token<CSSTypes.Property.BorderRightColor, "colors">;

  borderBottom: Token<CSSTypes.Property.BorderBottom, "borders">;
  borderBottomWidth: Token<CSSTypes.Property.BorderBottomWidth, "borderWidths">;
  borderBottomStyle: Token<CSSTypes.Property.BorderBottomStyle, "borderStyles">;
  borderBottomColor: Token<CSSTypes.Property.BorderBottomColor, "colors">;
  borderBottomLeftRadius: Token<
    CSSTypes.Property.BorderBottomLeftRadius,
    "radii"
  >;
  borderBottomRightRadius: Token<
    CSSTypes.Property.BorderBottomRightRadius,
    "radii"
  >;

  borderLeft: Token<CSSTypes.Property.BorderLeft, "borders">;
  borderLeftWidth: Token<CSSTypes.Property.BorderLeftWidth, "borderWidths">;
  borderLeftStyle: Token<CSSTypes.Property.BorderLeftStyle, "borderStyles">;
  borderLeftColor: Token<CSSTypes.Property.BorderLeftColor, "colors">;

  borderX: Token<CSSTypes.Property.Border, "borders">;
  borderY: Token<CSSTypes.Property.Border, "borders">;
}>;
