import { Token } from "@kefas-ui/theming";
import * as CSSTypes from "csstype";
export { grid } from "styled-system";

// TODO: add shorter aliases for some of these
export type GridProps = Partial<{
  gridGap: Token<CSSTypes.Property.GridGap, "space">;
  gridRowGap: Token<CSSTypes.Property.GridRowGap, "space">;
  gridColumnGap: Token<CSSTypes.Property.GridColumnGap, "space">;

  gridColumn: Token<CSSTypes.Property.GridColumn>;
  gridRow: Token<CSSTypes.Property.GridRow>;
  gridArea: Token<CSSTypes.Property.GridArea>;
  gridAutoFlow: Token<CSSTypes.Property.GridAutoFlow>;
  gridAutoRows: Token<CSSTypes.Property.GridAutoRows>;
  gridAutoColumns: Token<CSSTypes.Property.GridAutoColumns>;
  gridTemplateRows: Token<CSSTypes.Property.GridTemplateRows>;
  gridTemplateColumns: Token<CSSTypes.Property.GridTemplateColumns>;
  gridTemplateAreas: Token<CSSTypes.Property.GridTemplateAreas>;
}>;
