import { FitnessClass, Node, Paragraph, Specification } from "../types";

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
  let activeNode = new Node(0, 0, 1, 0, 0, 0, 0, null, null);
  const globalSums = {
    width: 0,
    stretch: 0,
    shrink: 0,
  };

  const computeRatio = (node: Node, spec: Specification): number => {
    const L = globalSums.width - node.totalWidth;
    const lineLength = spec.type === "penalty" ? L + spec.width : L;
    console.log({ L, lineLength });
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

  const computeTotals = (startIdx: number) => {
    const totals = {
      tw: globalSums.width,
      ty: globalSums.stretch,
      tz: globalSums.shrink,
    };
    for (let i = startIdx; i < m; i++) {
      const currSpec = input[i];
      if (currSpec.type === "box") {
        break;
      }
      if (currSpec.type === "glue") {
        totals.tw += currSpec.width;
        totals.ty += currSpec.stretchability;
        totals.tz += currSpec.shrinkability;
      } else if (currSpec.penalty === -Infinity && i > startIdx) {
        break;
      }
    }
    return totals;
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
        console.log(idx);
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
        // insert new active nodes for breaks from Ac to b
        const { tw, ty, tz } = computeTotals(idx);
        for (let fitnessClass = 0; fitnessClass <= 3; fitnessClass += 1) {
          const dc = demetria[fitnessClass];
          if (dc <= bestDemetris + FLAGGED_COST) {
            const newNode = new Node(
              idx,
              bestActiveNodes[fitnessClass]!.line + 1,
              fitnessClass as FitnessClass,
              tw,
              ty,
              tz,
              dc,
              currentActiveNode,
              bestActiveNodes[fitnessClass]
            );
            if (preva == null) {
              activeNode = newNode;
            } else {
              preva.next = newNode;
            }
            preva = newNode;
          }
        }
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
  }
  const result = [];
  let d = Infinity;
  let a: Node | null = activeNode;
  let best: Node | null = activeNode;
  while (true) {
    console.log(a);
    a = a.next;
    if (a == null) {
      break;
    }
    if (a.totalDemerits < d) {
      d = a.totalDemerits;
      best = a;
    }
  }

  while (best != null) {
    result.push({ position: best.position }); // TODO: add ratios prolly
    best = best.previous;
  }
  result.reverse();
  console.log(globalSums);
  return result;
};
