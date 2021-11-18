import { findLineBreaks } from "../src/algorithms/findLineBreaks";
import { Paragraph } from "../src/types";
import {
  calculateLines,
  getItemsForBreakpoint,
} from "../src/algorithms/transformations";
import { testParagraph } from "./testParagraph";

it("returns paragraph", () => {
  const breakpoints = findLineBreaks(testParagraph, 320);
  const lines = calculateLines(testParagraph, 320, breakpoints);
  console.log(lines);
  expect(true).toBe(true);
});

it("gets correct elements for breakpoints", () => {
  const input: Paragraph = [
    {
      type: "box",
      width: 0,
    },
    {
      type: "box",
      width: 1,
    },
    {
      type: "box",
      width: 2,
    },
    {
      type: "box",
      width: 3,
    },
    {
      type: "box",
      width: 4,
    },
    {
      type: "box",
      width: 5,
    },
    {
      type: "box",
      width: 6,
    },
  ];
  expect(getItemsForBreakpoint(0, [0, 3, 5], input)).toEqual([
    {
      type: "box",
      width: 0,
    },
    {
      type: "box",
      width: 1,
    },
    {
      type: "box",
      width: 2,
    },
    {
      type: "box",
      width: 3,
    },
  ]);
  expect(getItemsForBreakpoint(1, [0, 3, 5], input)).toEqual([
    {
      type: "box",
      width: 4,
    },
    {
      type: "box",
      width: 5,
    },
  ]);
  expect(getItemsForBreakpoint(2, [0, 3, 5], input)).toEqual([
    {
      type: "box",
      width: 6,
    },
  ]);
});
