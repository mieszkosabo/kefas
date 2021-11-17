/* eslint-disable react/no-unescaped-entities */
import { Box } from "@kefas-ui/system";
import * as React from "react";
import { Justified } from ".";

export default {
  title: "Justify/Justified",
  component: Justified,
};

export const Example = () => (
  <>
    <Box as="p" w="20rem" fontFamily="monospace" textAlign="justify">
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
    -------------------------
    <Box as="p" w="20rem" fontFamily="monospace" textAlign="justify">
      The Knuth-Plass algorithm on the other hand optimizes the spacing between
      words over the whole paragraph, seeking to minimize the overall "badness"
      of the layout. This factor depends on the amount by which spaces have been
      shrunk or stretched and the number of hyphenated lines. The benefits of
      this approach are greater when rendering narrower columns of text (eg. on
      small screens).
    </Box>
    <Justified w="20rem" fontFamily="monospace">
      The Knuth-Plass algorithm on the other hand optimizes the spacing between
      words over the whole paragraph, seeking to minimize the overall "badness"
      of the layout. This factor depends on the amount by which spaces have been
      shrunk or stretched and the number of hyphenated lines. The benefits of
      this approach are greater when rendering narrower columns of text (eg. on
      small screens).
    </Justified>
  </>
);
