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
export type SpecificationWithText = Specification & { text?: string };
export type Paragraph = Specification[];

export type FitnessClass = 0 | 1 | 2 | 3;

export type MeasureFunction = (word: string) => number;
export type HyphenateFunction = (word: string) => string[];
export interface Node {
  position: number;
  line: number;
  fitness: FitnessClass;
  totalWidth: number;
  totalStretch: number;
  totalShrink: number;
  totalDemerits: number;
  previous: Node | null;
}
