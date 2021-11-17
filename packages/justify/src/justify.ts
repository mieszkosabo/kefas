// WORKS ONLY FOR MONOTYPES WITHOUT HYPHENS

import { WidthsMap } from "./Justified";

type PossibleLineBreak = {
  first: number;
  last: number;
  next: number;
  score: number;
  width: number;
};

const SPACE = 1;

const textToPossibleLineBreaks = (
  text: string,
  widths: WidthsMap
): PossibleLineBreak[] => {
  const result: PossibleLineBreak[] = [];
  let idx = 0;
  while (idx < text.length) {
    while (idx < text.length && text[idx] === " ") {
      idx += 1;
    }
    const start = idx;
    while (idx < text.length && !(text[idx] === " ")) {
      idx += 1;
    }
    if (start < idx) {
      result.push({
        first: start,
        last: idx,
        next: -1,
        score: -1,
        //width: widths.get(text.substr(start, idx - start)) as number,
        width: idx - start,
      });
    }
  }
  result.push({ first: -1, last: -1, next: -1, score: 0, width: -1 });
  return result;
};

const KnuthPlass = (
  possibleBreaks: PossibleLineBreak[],
  idx: number,
  idealWidth: number,
  maxWidth: number
): void => {
  let jdx = idx + 1;
  let currLineLength = possibleBreaks[idx].width;
  let bestScore = Math.pow(idealWidth - currLineLength, 2);
  let bestTail = jdx;

  while (jdx < possibleBreaks.length) {
    const wordWidth = possibleBreaks[jdx].width;
    if (currLineLength + SPACE + wordWidth > maxWidth) {
      break;
    }
    const lineScore = Math.pow(
      idealWidth - (currLineLength + SPACE + wordWidth),
      2
    );
    currLineLength += wordWidth + SPACE;

    if (possibleBreaks[jdx].score === -1) {
      KnuthPlass(possibleBreaks, jdx, idealWidth, maxWidth);
    }

    if (lineScore + possibleBreaks[jdx].score < bestScore) {
      bestScore = lineScore + possibleBreaks[jdx].score;
      bestTail = jdx;
    }

    jdx++;
  }

  possibleBreaks[idx].score = bestScore;
  possibleBreaks[idx].next = bestTail + 1;

  if (possibleBreaks[idx].next + 1 === possibleBreaks.length) {
    // last paragraph doesn't contribute to score
    possibleBreaks[idx].score = 0;
  }
};

const getLines = (text: string, breaks: PossibleLineBreak[]): string[] => {
  const result = [];
  let idx = 0;

  while (idx < breaks.length && idx !== -1) {
    const next = breaks[idx].next;
    let line = "";

    for (let i = idx; i < next && i + 1 < breaks.length; i++) {
      if (breaks[i].last - breaks[i].first <= 0) {
        break;
      }
      line += i === idx ? "" : " ";
      line += text.substr(breaks[i].first, breaks[i].last - breaks[i].first);
    }
    result.push(line);
    idx = breaks[idx].next;
  }
  return result;
};

export const justify = (
  text: string,
  paragraphWidth: number,
  widths: WidthsMap
) => {
  console.log(paragraphWidth);
  const breaks = textToPossibleLineBreaks(text, widths);
  KnuthPlass(breaks, 0, paragraphWidth, paragraphWidth);
  for (const el of breaks) {
    console.log(el.score);
  }
  return getLines(text, breaks);
};
