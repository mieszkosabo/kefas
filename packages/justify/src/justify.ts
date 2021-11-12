import { FitnessClass, Node, Paragraph, Specification } from "./types";

const TRESHOLD = 2;
const FLAGGED_COST = 50;
const FITNESS_COST = 3000;

const shouldRemoveNode = (ratio: number, spec: Specification) =>
  ratio < -1 || (spec.type === "penalty" && spec.penalty === -Infinity);

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
// implementation of the Kunth-Plass line breaking algorithm
// WORK IN PROGRESS
export const justify = (input: Paragraph, paragraphLength: number) => {
  const m = input.length;
  const activeNode = new Node(0, 0, 1, 0, 0, 0, 0, null, null);
  const globalSums = {
    width: 0,
    stretch: 0,
    shrink: 0,
  };

  const computeRatio = (node: Node, spec: Specification): number => {
    const L = globalSums.width - node.totalWidth;
    const lineLength = spec.type === "penalty" ? L + spec.width : L;

    if (lineLength === paragraphLength) {
      return 0;
    }
    if (lineLength < paragraphLength) {
      const Y = globalSums.stretch - node.totalStretch;
      return Y > 0 ? (paragraphLength - lineLength) / Y : Infinity;
    } else {
      const Z = globalSums.shrink - node.totalShrink;
      return Z > 0 ? (paragraphLength - lineLength) / Z : Infinity;
    }
  };

  const computeDemetrisAndFitnessClass = (
    node: Node,
    ratio: number,
    spec: Specification
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
      demetris += FLAGGED_COST;
    }

    const fitnessClass = computeFitnessClass(ratio);

    if (Math.abs(fitnessClass - node.fitness) > 1) {
      demetris += FITNESS_COST;
    }

    return [demetris, fitnessClass];
  };

  const mainLoop = (spec: Specification, idx: number) => {
    let currentActiveNode: Node | null = activeNode;
    let preva: Node | null = null;

    outer: while (currentActiveNode != null) {
      const demetria = [
        Infinity, // D_0
        Infinity, // D_1
        Infinity, // D_2
        Infinity, // D_3
      ];
      const bestActiveNodes: (Node | null)[] = [null, null, null, null];
      let bestDemetris = -Infinity;

      inner: while (currentActiveNode != null) {
        const nexta: Node | null = currentActiveNode.next;
        const currentLine = currentActiveNode.line + 1;
        const ratio = computeRatio(currentActiveNode, spec);

        if (shouldRemoveNode(ratio, spec)) {
          currentActiveNode = currentActiveNode.remove();
        } else {
          preva = currentActiveNode;
        }
        if (ratio >= -1 && ratio <= TRESHOLD) {
          const [demetris, currentFitness] = computeDemetrisAndFitnessClass(
            currentActiveNode as Node, // FIXME:
            ratio,
            spec
          );

          if (demetris < demetria[currentFitness]) {
            demetria[currentFitness] = demetris;
            bestActiveNodes[currentFitness] = currentActiveNode;
            if (demetris < bestDemetris) {
              bestDemetris = demetris;
            }
          }
        }

        currentActiveNode = nexta;

        if (
          currentActiveNode != null &&
          currentActiveNode.line >= currentLine
        ) {
          break inner;
        }
      }

      if (bestDemetris < Infinity) {
        // TODO: insert new active nodes for breaks from Ac to b
      }
    }
  };

  for (let b = 0; b < m; b++) {
    const currEl = input[b];

    if (currEl.type === "box") {
      globalSums.width += currEl.width;
    } else if (currEl.type === "glue") {
      if (input[b - 1].type === "box") {
        mainLoop(currEl, b);
      }
      globalSums.width += currEl.width;
      globalSums.stretch += currEl.stretchability;
      globalSums.shrink += currEl.shrinkability;
    } else {
      if (currEl.penalty !== Infinity) {
        mainLoop(currEl, b);
      }
    }

    // TODO: choosing breakpoints
  }
  return input; // TODO:
};
