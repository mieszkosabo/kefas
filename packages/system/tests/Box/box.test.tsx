import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Box } from "../../src";

describe("Box tests", () => {
  it("defaults", () => {
    const { getByText } = render(<Box>hello</Box>);
    const el = getByText("hello");
    expect(el).toBeInTheDocument();
    expect(el).toHaveStyle("margin: 0");
    expect(el).toHaveStyle("min-width: 0");
  });

  it("can override defaults", () => {
    const { getByText } = render(
      <Box minW={150} m={"15px"}>
        hello
      </Box>
    );
    const el = getByText("hello");
    expect(el).toHaveStyle("min-width: 150px");
    expect(el).toHaveStyle("margin: 15px");
  });

  it("converts raw numbers to pixels where it should", () => {
    const { getByText } = render(
      <Box w={100} mt={15} pl={15}>
        hello
      </Box>
    );
    const el = getByText("hello");
    expect(el).toHaveStyle("width: 100px");
    expect(el).toHaveStyle("margin-top: 15px");
    expect(el).toHaveStyle("padding-left: 15px");
  });

  it("renders as different html elements when as props is provided", () => {
    const { getByText } = render(
      <Box as="button" w={100} mt={15} pl={15}>
        hello
      </Box>
    );
    const el = getByText("hello");
    expect(el.nodeName).toBe("BUTTON");
  });
});
