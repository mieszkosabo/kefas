import { Token } from "@kefas-ui/theming";
import { system, Config } from "styled-system";
import * as CSSTypes from "csstype";
import { transformRawValueToPixelOrPercent } from "./utils";

export const positionConfig: Config = {
  position: true,
  zIndex: {
    property: "zIndex",
    scale: "zIndices",
  },
  top: {
    property: "top",
    scale: "sizes",
    transform: transformRawValueToPixelOrPercent,
  },
  right: {
    property: "right",
    scale: "sizes",
    transform: transformRawValueToPixelOrPercent,
  },
  bottom: {
    property: "bottom",
    scale: "sizes",
    transform: transformRawValueToPixelOrPercent,
  },
  left: {
    property: "left",
    scale: "sizes",
    transform: transformRawValueToPixelOrPercent,
  },
};

export type PositionProps = Partial<{
  position: Token<CSSTypes.Property.Position>;
  zIndex: Token<CSSTypes.Property.ZIndex, "zIndices">;
  top: Token<CSSTypes.Property.Top, "space">;
  right: Token<CSSTypes.Property.Right, "space">;
  bottom: Token<CSSTypes.Property.Bottom, "space">;
  left: Token<CSSTypes.Property.Left, "space">;
}>;

export const position = system(positionConfig);
