import { justify } from "../src/justify";
import { testParagraph } from "./testParagraph";

it("returns paragraph", () => {
  console.log(justify(testParagraph, 320));
});
