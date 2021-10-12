import { isString } from "../src";

describe("isString tests", () => {
  it("should pass on string", () => {
    expect(isString("elo")).toBe(true);
  });
  it("should return false for non strings", () => {
    expect(isString(42)).toBe(false);
  });
});
