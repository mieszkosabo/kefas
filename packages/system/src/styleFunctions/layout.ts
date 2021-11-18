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
  size: {
    properties: ["width", "height"],
    scale: "sizes",
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
};
layoutConfig.w = layoutConfig.width;
layoutConfig.h = layoutConfig.height;
layoutConfig.maxW = layoutConfig.maxWidth;
layoutConfig.minW = layoutConfig.minWidth;
layoutConfig.maxH = layoutConfig.maxHeight;
layoutConfig.minH = layoutConfig.minHeight;

export type LayoutProps = Partial<{
  width: Token<CSSTypes.Property.Width | number, "sizes">;
  w: Token<CSSTypes.Property.Width | number, "sizes">;

  height: Token<CSSTypes.Property.Height | number, "sizes">;
  h: Token<CSSTypes.Property.Height | number, "sizes">;

  minWidth: Token<CSSTypes.Property.MinWidth | number, "sizes">;
  minW: Token<CSSTypes.Property.MinWidth | number, "sizes">;

  maxWidth: Token<CSSTypes.Property.MaxWidth | number, "sizes">;
  maxW: Token<CSSTypes.Property.MaxWidth | number, "sizes">;

  minHeight: Token<CSSTypes.Property.MinHeight | number, "sizes">;
  minH: Token<CSSTypes.Property.MinHeight | number, "sizes">;

  maxHeight: Token<CSSTypes.Property.MaxHeight | number, "sizes">;
  maxH: Token<CSSTypes.Property.MaxHeight | number, "sizes">;

  size: Token<CSSTypes.Property.Width | number, "sizes">;
  overflow: Token<CSSTypes.Property.Overflow>;
  overflowX: Token<CSSTypes.Property.OverflowX>;
  overflowY: Token<CSSTypes.Property.OverflowY>;
  display: Token<CSSTypes.Property.Display>;
  verticalAlign: Token<CSSTypes.Property.VerticalAlign>;
}>;

export const layout = system(layoutConfig);
