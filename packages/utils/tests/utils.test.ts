import { add } from "../src";

describe("add fn tests", () => {
  it("adds numbers", () => {
    expect(add(42, 1)).toBe(43);
  });
});
