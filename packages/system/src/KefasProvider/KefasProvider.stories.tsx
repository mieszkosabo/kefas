import * as React from "react";
import { KefasProvider } from ".";
import { Box } from "..";

export default {
  title: "Kefas Provider",
  component: KefasProvider,
};

export const Example = () => (
  <KefasProvider
    theme={{
      global: { bg: "coolPurple", color: "palevioletred", ml: "50px" },
      colors: { coolPurple: "rgb(32, 4, 38)" },
      fontSizes: [16, 32, 64, 72],
    }}
  >
    <Box as="p" fontSize={[0, 1, 2, 3]}>
      elo
    </Box>
    <Box w={"100px"} h="100px" bg="nice" />
    <Box w={["100px", "300px", "600px"]} h="100px" bg="palevioletred" />
  </KefasProvider>
);

export const ResponsiveTextMatrixExample = () => (
  <KefasProvider
    theme={{
      global: { bg: "coolPurple", color: "palevioletred", p: "50px" },
      colors: { coolPurple: "rgb(32, 4, 38)" },
      fontSizes: [16, 32, 64, 72],
    }}
  >
    <Box as="p" fontSize={[0, 1, 2, 3]}>
      elo
    </Box>
    <Box
      w={["100px", "300px", "600px", "800px"]}
      h="100px"
      bg="palevioletred"
    />
  </KefasProvider>
);
