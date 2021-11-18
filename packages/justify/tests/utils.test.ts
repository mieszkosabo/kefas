import { unique } from "../src";

describe("removes duplicates from array", () => {
  it("removes duplicate from number array", () => {
    expect(unique([1, 2, 3, 4, 3, 3, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("removes duplicate from string array", () => {
    expect(unique(["ala", "ala", "ma", "kota", "ma"])).toEqual([
      "ala",
      "ma",
      "kota",
    ]);
  });
});
