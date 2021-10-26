import { Config, system } from "styled-system";
import * as CSSTypes from "csstype";
import { Token } from "@kefas-ui/theming";

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

export type FlexProps = Partial<{
  alignItems: Token<CSSTypes.Property.AlignItems>;
  align: Token<CSSTypes.Property.AlignItems>;

  justifyContent: Token<CSSTypes.Property.JustifyContent>;
  justify: Token<CSSTypes.Property.JustifyContent>;

  alignContent: Token<CSSTypes.Property.AlignContent>;
  justifyItems: Token<CSSTypes.Property.JustifyItems>;

  flexWrap: Token<CSSTypes.Property.FlexWrap>;

  flexDirection: Token<CSSTypes.Property.FlexDirection>;
  direction: Token<CSSTypes.Property.FlexDirection>;

  flex: Token<CSSTypes.Property.Flex>;

  flexGrow: Token<CSSTypes.Property.FlexGrow>;
  grow: Token<CSSTypes.Property.FlexGrow>;

  shrink: Token<CSSTypes.Property.FlexShrink>;
  flexShrink: Token<CSSTypes.Property.FlexShrink>;

  flexBasis: Token<CSSTypes.Property.FlexBasis>;
  basis: Token<CSSTypes.Property.FlexBasis>;

  justifySelf: Token<CSSTypes.Property.JustifySelf>;
  alignSelf: Token<CSSTypes.Property.AlignSelf>;
  order: Token<CSSTypes.Property.Order>;
}>;
export const flexbox = system(config);
