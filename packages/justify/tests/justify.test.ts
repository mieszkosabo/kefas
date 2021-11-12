import { justify } from "../src/justify";
import { testParagraph } from "./testParagraph";

it("returns paragraph", () => {
  expect(justify(testParagraph)).toEqual(testParagraph);
});
