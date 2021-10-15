import { Config, system } from "styled-system";

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

export const color = system(config);
