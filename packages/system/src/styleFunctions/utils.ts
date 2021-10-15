import { get } from "styled-system";

const isNumber = (n: unknown): n is number =>
  typeof n === "number" && !isNaN(n);

export const transformRawValueToPixelOrPercent = (
  n: string | (string | number)[],
  scale: any
) => {
  const themeResult = get(n, scale);
  if (themeResult == null) {
    if (!isNumber(n)) {
      return n;
    } else {
      return n > 1 ? `${n}px` : n * 100 + "%";
    }
  }
  return themeResult;
};
