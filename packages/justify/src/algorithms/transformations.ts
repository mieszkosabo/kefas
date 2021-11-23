import { isSpace } from "..";
import {
  HyphenateFunction,
  MeasureFunction,
  Paragraph,
  SpecificationWithText,
} from "../types";
import { forcedBreak, InfPenalty } from "./findLineBreaks";

export const transformTextToSpecifications = (
  text: string,
  measure: MeasureFunction,
  hyphenate?: HyphenateFunction
): SpecificationWithText[] => {
  const result: SpecificationWithText[] = [];
  const spaceWidth = measure(" ");
  const hyphenWidth = measure("-");
  const shrinkability = Math.max(0, spaceWidth - 2);

  text
    .split(/(\s+)/)
    .filter((w) => w.length > 0)
    .forEach((w) => {
      if (isSpace(w)) {
        result.push({
          type: "glue",
          width: spaceWidth,
          shrinkability,
          stretchability: spaceWidth * 1.5,
          text: w,
        });
        return;
      }
      if (hyphenate) {
        const chunks = hyphenate(w);
        chunks.forEach((chunk, idx) => {
          result.push({
            type: "box",
            width: measure(chunk),
            text: chunk,
          });
          if (idx < chunks.length - 1) {
            result.push({
              type: "penalty",
              width: hyphenWidth,
              penalty: 10,
              flagged: true,
            });
          }
        });
      } else {
        result.push({
          type: "box",
          width: measure(w),
          text: w,
        });
      }
    });

  // "finishing glue"
  result.push({
    type: "glue",
    width: 0,
    stretchability: InfPenalty,
    shrinkability: 0,
    text: "",
  });
  result.push(forcedBreak());
  return result;
};

export const getItemsForBreakpoint = (
  b: number,
  breakpoints: number[],
  input: SpecificationWithText[]
) => {
  const start = b === 0 ? breakpoints[b] : breakpoints[b] + 1;
  const end = b + 1 < breakpoints.length ? breakpoints[b + 1] + 1 : undefined;
  return input.slice(start, end);
};

const calculateLineSpacing = (
  items: Paragraph,
  idealLineLength: number
): number => {
  const lineSums = items.reduce(
    (acc, item, idx) => {
      const currAcc = { ...acc };
      if (item.type === "box") {
        currAcc.actualWidth += item.width;
      } else if (
        item.type === "glue" &&
        idx !== 0 &&
        idx !== items.length - 1
      ) {
        currAcc.actualWidth += item.width;
        currAcc.glueCounts += 1;
      } else if (item.type === "penalty" && idx === items.length - 1) {
        currAcc.actualWidth += item.width;
      }
      return currAcc;
    },
    { actualWidth: 0, glueCounts: 0 }
  );

  return (idealLineLength - lineSums.actualWidth) / lineSums.glueCounts;
};

export const calculateLines = (
  input: SpecificationWithText[],
  lineLength: number,
  breakpoints: number[]
) => {
  const result = [];
  for (let i = 0; i < breakpoints.length - 1; i++) {
    const isHyphen = input[breakpoints[i + 1]]?.type === 'penalty' && i + 1 < breakpoints.length - 1;
    const items = getItemsForBreakpoint(i, breakpoints, input);
    const wordSpacing = calculateLineSpacing(items, lineLength);

    const text = items.map(({ text }) => (text != null ? text : "")).join("");
    result.push({
      text: isHyphen ? text + '-' : text,
      wordSpacing,
    });
  }
  return result;
};
