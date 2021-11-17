let measureCtx: CanvasRenderingContext2D;

const measureText = (font: string, text: string) => {
  if (!measureCtx) {
    const canvas = document.createElement("canvas");
    measureCtx = canvas.getContext("2d")!;
  }
  measureCtx.font = font;
  return measureCtx.measureText(text).width;
};

// https://github.com/robertknight/tex-linebreak/blob/master/src/util/dom-text-measurer.ts
const getFontFromElement = (el: Element) => {
  const style = getComputedStyle(el);
  // Safari and Chrome can synthesize a value for `font` for us.
  let font = style.font!;
  if (font.length > 0) {
    return font;
  }

  // Fall back to generating CSS font property value if browser (eg. Firefox)
  // does not synthesize it automatically.
  const { fontStyle, fontVariant, fontWeight, fontSize, fontFamily } = style;
  font = `${fontStyle!} ${fontVariant!} ${fontWeight!} ${fontSize!} ${fontFamily}`;
  return font;
};

export const measure = (context: Element) => (text: string) => {
  const font = getFontFromElement(context);
  const width = measureText(font, text);
  return width;
};
