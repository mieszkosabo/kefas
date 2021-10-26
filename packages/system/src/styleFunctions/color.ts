import { Config, system } from "styled-system";
import * as CSSTypes from "csstype";
import { Token } from "@kefas-ui/theming";

const config: Config = {
  color: {
    property: "color",
    scale: "colors",
  },
  backgroundColor: {
    property: "backgroundColor",
    scale: "colors",
  },
  opacity: {
    property: "opacity",
    scale: "opacities",
  },
};

config.bg = config.backgroundColor;

export type ColorProps = Partial<{
  color: Token<CSSTypes.Properties["color"], "colors">;
  backgroundColor: Token<CSSTypes.Properties["color"], "colors">;
  bg: Token<CSSTypes.Properties["color"], "colors">;
  opacity: Token<CSSTypes.Properties["opacity"], "opacities">;
}>;

export const color = system(config);
