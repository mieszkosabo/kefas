import { ThemeTypings } from "./theme.types";

export type ResponsiveArray<T> = Array<T>;
export type ResponsiveValue<T> = T | ResponsiveArray<T>;

// TODO: ResponsiveObject

export type Token<
  CSSType,
  ThemeKey = unknown
> = ThemeKey extends keyof ThemeTypings
  ? ResponsiveValue<CSSType | ThemeTypings[ThemeKey]>
  : ResponsiveValue<CSSType>;
