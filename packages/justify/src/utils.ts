import { Paragraph, Specification } from "./types";

export const transformTextToSpecifications = (
  text: string,
  widths: Map<string, number>
): Paragraph => {
  return text.split("").map((char) => {
    switch (char) {
      case " ": {
        const idealWidth = widths.get(" ") as number;

        return {
          type: "glue",
          width: idealWidth,
          stretchability: idealWidth / 2,
          shrinkability: idealWidth / 3,
        } as Specification;
      }
      default: {
        return {
          type: "box",
          width: widths.get(char),
        } as Specification;
      }
    }
  });
};

export const unique = <T>(arr: Array<T>): Array<T> => {
  const length = arr.length;
  const result = [];
  const seen = new Set();

  for (let i = 0; i < length; i++) {
    const value = arr[i];
    if (seen.has(value)) {
      continue;
    }
    seen.add(value);
    result.push(value);
  }
  return result;
};
