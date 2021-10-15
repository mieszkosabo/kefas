import { system, Config } from "styled-system";
import { transformRawValueToPixelOrPercent } from "./utils";

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
export const layout = system(layoutConfig);
