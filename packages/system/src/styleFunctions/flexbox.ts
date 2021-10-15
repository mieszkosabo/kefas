import { Config, system } from "styled-system";

const config: Config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
  // aliases for popular properties
  align: {
    property: "alignItems",
  },
  justify: {
    property: "justifyContent",
  },
  basis: {
    property: "flexBasis",
  },
  shrink: {
    property: "flexShrink",
  },
  grow: {
    property: "flexGrow",
  },
  direction: {
    property: "flexDirection",
  },
};

export const flexbox = system(config);
