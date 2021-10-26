import { layout, flexbox, position } from "../../src/styleFunctions";

describe("layout tests", () => {
  it("numbers > 1 get turned to pixels", () => {
    expect(
      layout({
        width: 50,
      })
    ).toEqual({
      width: "50px",
    });
  });

  it("numbers > 0 && < 1 get turned to %", () => {
    expect(
      layout({
        width: 1 / 2,
      })
    ).toEqual({
      width: "50%",
    });
  });

  it("doesn't add units to 0", () => {
    expect(
      layout({
        width: 0,
      })
    ).toEqual({
      width: 0,
    });
  });

  it("works with responsive arrays", () => {
    expect(
      layout({
        width: [1, 1 / 2, 1 / 4],
        minHeight: 32,
        maxWidth: 768,
      })
    ).toEqual({
      width: "100%",
      maxWidth: "768px",
      minHeight: "32px",
      "@media screen and (min-width: 40em)": {
        width: "50%",
      },
      "@media screen and (min-width: 52em)": {
        width: "25%",
      },
    });
  });

  it("works with aliases", () => {
    expect(
      layout({
        w: [1, 1 / 2, 1 / 4],
        minH: 32,
        maxW: 768,
      })
    ).toEqual({
      width: "100%",
      maxWidth: "768px",
      minHeight: "32px",
      "@media screen and (min-width: 40em)": {
        width: "50%",
      },
      "@media screen and (min-width: 52em)": {
        width: "25%",
      },
    });
  });
});

describe("flexbox tests", () => {
  it("works with popular aliases", () => {
    expect(
      flexbox({
        align: "flex-end",
        justify: "center",
        direction: "row",
        grow: 1,
        basis: "auto",
        shrink: 2,
      })
    ).toEqual({
      alignItems: "flex-end",
      justifyContent: "center",
      flexDirection: "row",
      flexGrow: 1,
      flexBasis: "auto",
      flexShrink: 2,
    });
  });
});

describe("Position tests", () => {
  it("converts raw numbers to px", () => {
    expect(
      position({
        left: 23,
      })
    ).toEqual({
      left: "23px",
    });
  });
});
