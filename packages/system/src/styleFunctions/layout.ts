import { system, Config } from "styled-system";
import { transformRawValueToPixelOrPercent } from "./utils";
import { Token } from "@kefas-ui/theming";
import * as CSSTypes from "csstype";

export const layoutConfig: Config = {
  width: {
    property: "width",
    scale: "sizes",
    transform: transformRawValueToPixelOrPercent,
  },
  height: {
    property: "height",
    scale: "sizes",
    transform: transformRawValueToPixelOrPercent,
  },
  minWidth: {
    property: "minWidth",
    scale: "sizes",
    transform: transformRawValueToPixelOrPercent,
  },
  maxWidth: {
    property: "maxWidth",
    scale: "sizes",
    transform: transformRawValueToPixelOrPercent,
  },
  minHeight: {
    property: "minHeight",
    scale: "sizes",
    transform: transformRawValueToPixelOrPercent,
  },
  maxHeight: {
    property: "maxHeight",
    scale: "sizes",
    transform: transformRawValueToPixelOrPercent,
  },
};
layoutConfig.w = layoutConfig.width;
layoutConfig.h = layoutConfig.height;
layoutConfig.maxW = layoutConfig.maxWidth;
layoutConfig.minW = layoutConfig.minWidth;
layoutConfig.maxH = layoutConfig.maxHeight;
layoutConfig.minH = layoutConfig.minHeight;

export type LayoutProps = Partial<{
  width: Token<CSSTypes.Property.Width, "sizes">;
  w: Token<CSSTypes.Property.Width, "sizes">;

  height: Token<CSSTypes.Property.Height, "sizes">;
  h: Token<CSSTypes.Property.Height, "sizes">;

  minWidth: Token<CSSTypes.Property.MinWidth, "sizes">;
  minW: Token<CSSTypes.Property.MinWidth, "sizes">;

  maxWidth: Token<CSSTypes.Property.MaxWidth, "sizes">;
  maxW: Token<CSSTypes.Property.MaxWidth, "sizes">;

  minHeight: Token<CSSTypes.Property.MinHeight, "sizes">;
  minH: Token<CSSTypes.Property.MinHeight, "sizes">;

  maxHeight: Token<CSSTypes.Property.MaxHeight, "sizes">;
  maxH: Token<CSSTypes.Property.MaxHeight, "sizes">;
}>;

export const layout = system(layoutConfig);
