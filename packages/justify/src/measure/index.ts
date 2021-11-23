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

const createMeasureFunction = () => {
  const fontsCache: Map<Element, string> = new Map();
  const widthsCache: Map<string, Map<string, number>> = new Map();

  return (context: Element) => (text: string) => {
    let font = fontsCache.get(context);
    if (!font) {
      font = getFontFromElement(context);
      fontsCache.set(context, font);
    }

    let widths = widthsCache.get(font);
    if (!widths) {
      widths = new Map();
      widthsCache.set(font, widths);
    }

    let width = widths.get(text);
    if (!width) {
      width = measureText(font, text);
      widths.set(text, width);
    }

    return width;
  };
};

export const measure = createMeasureFunction();
