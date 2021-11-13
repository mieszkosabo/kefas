import { Box } from "@kefas-ui/system";
import * as React from "react";
import { Justified } from ".";

export default {
  title: "Justify/Justified",
  component: Justified,
};

export const Example = () => (
  <>
    <Box as="p" w="20rem" fontFamily="monospace">
      So Hansel and Grethel sat by the fire, and at noon they each ate their
      pieces of bread. They thought their father was in the wood all the time,
      as they seemed to hear the strokes of the axe: but really it was only a
      dry branch hanging to a withered tree that the wind moved to and fro. So
      when they had stayed there a long time their eyelids closed with
      weariness, and they fell fast asleep.
    </Box>
    <Justified w="20rem" fontFamily="monospace">
      So Hansel and Grethel sat by the fire, and at noon they each ate their
      pieces of bread. They thought their father was in the wood all the time,
      as they seemed to hear the strokes of the axe: but really it was only a
      dry branch hanging to a withered tree that the wind moved to and fro. So
      when they had stayed there a long time their eyelids closed with
      weariness, and they fell fast asleep.
    </Justified>
  </>
);
