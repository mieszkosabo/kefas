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
    }}
  >
    <h1>elo</h1>
    <Box w="100px" h="100px" bg="nice" />
    <Box w="100px" h="100px" bg="palevioletred" />
  </KefasProvider>
);
