import { Box, TypographyProps } from '@kefas-ui/system';
import * as React from 'react';
import { unique } from '..';
import { WidthsMap } from '../Justified';


export interface CalculateWidthProps extends TypographyProps {
  text: string;
  setWidths: (widths: WidthsMap) => void;
};

export const CalculateWidths = React.memo<CalculateWidthProps>(
  ({ text, setWidths, ...textProps }: CalculateWidthProps) => {
    const widths = new Map<string, number>();
    const {
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      textAlign,
      fontStyle
    } = textProps;
    React.useLayoutEffect(() => {
      console.log(widths);
      setWidths(widths);
    }, []);

    return (
      <>
        <Box
            position="absolute"
            style={{ transform: "translateX(9999px)" }}
          >
            <Box
              as="p"
              ref={(el) => {
                if (el) {
                  console.log()
                  const fontSizeInPx = parseFloat(getComputedStyle(el).fontSize);
                  console.log({'space from fotnSize': fontSizeInPx / 4});
                  // console.log({'space from M': el.getBoundingClientRect().width / 3})
                  widths.set(" ", fontSizeInPx / 4); // space width is 1/4 em
                }
              }}
              >
                M
            </Box>
          </Box>
        {unique(text.split("")).filter(l => l !== " ").map((letter, idx) => (
          <Box
            key={idx}
            position="absolute"
            style={{ transform: "translateX(9999px)" }}
          >
            <Box
              as="p"
              ref={(el) => {
                if (el) {
                  widths.set(letter, el.getBoundingClientRect().width);
                }
              }}
              fontFamily={fontFamily}
              fontSize={fontSize}
              fontWeight={fontWeight}
              lineHeight={lineHeight}
              letterSpacing={letterSpacing}
              textAlign={textAlign}
              fontStyle={fontStyle}
            >
              {letter}
            </Box>
          </Box>
        ))}
      </>
    );
  }
);
