import { FitnessClass, Node, Paragraph, Specification } from "../types";

export const MIN_ADJUSTMENT_RATIO = -1;

export type Config = {
  maxAdjustmentRatio: number | null;
  initialMaxAdjustmentRatio: number;
  doubleHyphenPenalty: number;
  contrastingTightnessPenalty: number;
};

const defaultConfig: Config = {
  maxAdjustmentRatio: 2.0,
  initialMaxAdjustmentRatio: 1,
  doubleHyphenPenalty: 50,
  contrastingTightnessPenalty: 50,
};

export const InfPenalty = 1024;
export const minusInfPenalty = -1024;

export const forcedBreak = (): Specification => ({
  type: "penalty",
  penalty: minusInfPenalty,
  width: 0,
  flagged: false,
});

const isForcedBreak = (spec: Specification) =>
  spec.type === "penalty" && spec.penalty <= minusInfPenalty;

const computeFitnessClass = (ratio: number): FitnessClass => {
  if (ratio < -0.5) {
    return 0;
  } else if (ratio <= 0.5) {
    return 1;
  } else if (ratio <= 1) {
    return 2;
  } else {
    return 3;
  }
};

type GlobalSums = {
  width: number;
  stretch: number;
  shrink: number;
};

// TODO: update minAdjustmentRatio
const computeRatio = (
  node: Node,
  spec: Specification,
  globalSums: GlobalSums,
  idealLineLength: number
): number => {
  const L = globalSums.width - node.totalWidth;
  const lineLength = spec.type === "penalty" ? L + spec.width : L;

  if (lineLength === idealLineLength) {
    return 0;
  }
  if (lineLength < idealLineLength) {
    const Y = globalSums.stretch - node.totalStretch;
    return Y > 0 ? (idealLineLength - lineLength) / Y : Infinity;
  } else {
    const Z = globalSums.shrink - node.totalShrink;
    return Z > 0 ? (idealLineLength - lineLength) / Z : Infinity;
  }
};

const computeDemetrisAndFitnessClass = (
  node: Node,
  ratio: number,
  spec: Specification,
  input: Paragraph,
  config: Config
): [demetris: number, fitnessClass: FitnessClass] => {
  let demetris: number;
  if (spec.type === "penalty" && spec.penalty > 0) {
    demetris = Math.pow(
      1 + 100 * Math.pow(Math.abs(ratio), 3) + spec.penalty,
      2
    );
  } else if (spec.type === "penalty" && spec.penalty !== -Infinity) {
    demetris =
      Math.pow(1 + 100 * Math.pow(Math.abs(ratio), 3), 2) -
      Math.pow(spec.penalty, 2);
  } else {
    demetris = Math.pow(1 + 100 * Math.pow(Math.abs(ratio), 3), 2);
  }

  const nodeAtPos = input[node.position];
  if (
    spec.type === "penalty" &&
    spec.flagged &&
    nodeAtPos.type === "penalty" &&
    nodeAtPos.flagged
  ) {
    demetris += config.doubleHyphenPenalty;
  }

  const fitnessClass = computeFitnessClass(ratio);

  if (Math.abs(fitnessClass - node.fitness) > 1) {
    demetris += config.contrastingTightnessPenalty;
  }

  return [demetris, fitnessClass];
};

// implementation of the Kunth-Plass line breaking algorithm
// WORK IN PROGRESS
export const findLineBreaks = (
  input: Paragraph,
  idealLineLength: number,
  config: Partial<Config> = {}
): number[] => {
  const m = input.length;
  if (m === 0) {
    return [];
  }
  const currentConfig = { ...defaultConfig, ...config };
  const currentMaxAdjustmentRatio = Math.min(
    currentConfig.initialMaxAdjustmentRatio,
    currentConfig.maxAdjustmentRatio !== null
      ? currentConfig.maxAdjustmentRatio
      : Infinity
  );
  const active = new Set<Node>();
  active.add({
    position: 0,
    line: 0,
    fitness: 0,
    totalWidth: 0,
    totalStretch: 0,
    totalShrink: 0,
    totalDemerits: 0,
    previous: null,
  });

  const globalSums = {
    width: 0,
    stretch: 0,
    shrink: 0,
  };

  const minAdjusementRatioAboveTreshold = Infinity;

  for (let b = 0; b < m; b++) {
    const currEl = input[b];

    if (currEl.width < 0) {
      throw new Error(`Element with index ${b} has negative width`);
    }

    let canBreak = false;
    if (currEl.type === "box") {
      globalSums.width += currEl.width;
    } else if (currEl.type === "glue") {
      if (currEl.shrinkability < 0 || currEl.stretchability < 0) {
        throw new Error(
          `Item with index ${b} has negative stretchability or shrinkability`
        );
      }

      canBreak = b > 0 && input[b - 1].type === "box";
      if (!canBreak) {
        globalSums.width += currEl.width;
        globalSums.stretch += currEl.stretchability;
        globalSums.shrink += currEl.shrinkability;
      }
    } else {
      canBreak = currEl.penalty < InfPenalty;
    }
    if (!canBreak) {
      continue;
    }

    // MAIN LOOP

    let lastActive: Node | null = null;
    const feasibleLinebreaks: Node[] = [];

    active.forEach((a) => {
      const adjustementRatio = computeRatio(
        a,
        currEl,
        globalSums,
        idealLineLength
      );

      if (adjustementRatio < MIN_ADJUSTMENT_RATIO || isForcedBreak(currEl)) {
        active.delete(a);
        lastActive = a;
      }
      if (
        adjustementRatio >= MIN_ADJUSTMENT_RATIO &&
        adjustementRatio <= currentMaxAdjustmentRatio
      ) {
        // TODO: change TRESHOLD TO CURRENT MIN ADJUSTEMETN RATIO
        const [demetris, currentFitness] = computeDemetrisAndFitnessClass(
          a,
          adjustementRatio,
          currEl,
          input,
          currentConfig
        );

        const sumsToNextBox = {
          width: 0,
          stretch: 0,
          shrink: 0,
        };
        for (let bp = b; bp < m; bp++) {
          const spec = input[bp];
          if (spec.type === "box") {
            break;
          }
          if (spec.type === "penalty" && spec.penalty >= InfPenalty) {
            // TODO: add fun for this check
            break;
          }
          sumsToNextBox.width += spec.width;
          if (spec.type === "glue") {
            sumsToNextBox.shrink += spec.shrinkability;
            sumsToNextBox.stretch += spec.stretchability;
          }
        }

        feasibleLinebreaks.push({
          position: b,
          line: a.line + 1,
          fitness: currentFitness,
          totalWidth: globalSums.width + sumsToNextBox.width,
          totalShrink: globalSums.shrink + sumsToNextBox.shrink,
          totalStretch: globalSums.stretch + sumsToNextBox.stretch,
          totalDemerits: a.totalDemerits + demetris,
          previous: a,
        });
      }
    });

    // TODO: refactor
    if (feasibleLinebreaks.length > 0) {
      let bestNode = feasibleLinebreaks[0];
      for (const f of feasibleLinebreaks) {
        if (f.totalDemerits < bestNode.totalDemerits) {
          bestNode = f;
        }
      }
      active.add(bestNode);
    }

    if (active.size === 0) {
      // TODO: retry with different minAdjustementRatioAboveTreshold

      active.add({
        position: b,
        line: lastActive!.line + 1,
        fitness: 1,
        totalWidth: globalSums.width,
        totalShrink: globalSums.shrink,
        totalStretch: globalSums.stretch,
        totalDemerits: lastActive!.totalDemerits + 1024,
        previous: lastActive,
      });
    }

    if (currEl.type === "glue") {
      globalSums.width += currEl.width;
      globalSums.stretch += currEl.stretchability;
      globalSums.shrink += currEl.shrinkability;
    }
  }

  let bestNode: Node | null = null;
  active.forEach((a) => {
    if (!bestNode || a.totalDemerits < bestNode.totalDemerits) {
      bestNode = a;
    }
  });

  const result = [];
  let next: Node | null = bestNode!;

  while (next) {
    result.push(next.position);
    next = next.previous;
  }

  result.reverse();
  return result;
};
