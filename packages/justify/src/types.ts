export type SpecificationType = "box" | "glue" | "penalty";

export type Specification =
  | {
      type: "box";
      width: number;
    }
  | {
      type: "glue";
      width: number;
      stretchability: number;
      shrinkability: number;
    }
  | {
      type: "penalty";
      penalty: number;
      width: number;
      flagged: boolean;
    };

export type Paragraph = Specification[];

export type FitnessClass = 0 | 1 | 2 | 3;

// export interface Node {
//   position: number;
//   line: number;
//   fitness: FitnessClass;
//   totalWidth: number;
//   totalStretch: number;
//   totalShrink: number;
//   totalDemerits: number;
// }

// export interface INode extends NodeAttrs {
//   remove: () => void;
//   insertAfter: (node: Node) => void;
// }

export class Node {
  position: number;

  line: number;

  fitness: FitnessClass;

  totalWidth: number;

  totalStretch: number;

  totalShrink: number;

  totalDemerits: number;

  next: Node | null;

  previous: Node | null;

  constructor(
    position: number,
    line: number,
    fitness: FitnessClass,
    totalWidth: number,
    totalStretch: number,
    totalShrink: number,
    totalDemerits: number,
    next: Node | null,
    previous: Node | null
  ) {
    this.position = position;
    this.line = line;
    this.fitness = fitness;
    this.totalWidth = totalWidth;
    this.totalStretch = totalStretch;
    this.totalShrink = totalShrink;
    this.totalDemerits = totalDemerits;
    this.next = next;
    this.previous = previous;
  }

  remove() {
    if (this.previous === null) {
      if (this.next !== null) {
        this.next.previous = null;
      }
      return this.next;
    }
    this.previous.next = this.next;
    if (this.next !== null) {
      this.next.previous = this.previous;
    }
    return this.next;
  }
}
