/* eslint-disable react/no-unescaped-entities */
import { Box, Flex } from "@kefas-ui/system";
import * as React from "react";
import { Justified } from ".";
import polishPatterns from "hyphenation.pl";

export default {
  title: "Justify/Justified",
  component: Justified,
};

export const Example = () => (
  <>
    <Flex>
      <Box mr={4} as="p" w="20rem" fontFamily="monospace" textAlign="justify">
        The Knuth-Plass algorithm on the other hand optimizes the spacing
        between words over the whole paragraph, seeking to minimize the overall
        "badness" of the layout. This factor depends on the amount by which
        spaces have been shrunk or stretched and the number of hyphenated lines.
        The benefits of this approach are greater when rendering narrower
        columns of text (eg. on small screens).
      </Box>
      <Justified w="20rem" fontFamily="monospace">
        The Knuth-Plass algorithm on the other hand optimizes the spacing
        between words over the whole paragraph, seeking to minimize the overall
        "badness" of the layout. This factor depends on the amount by which
        spaces have been shrunk or stretched and the number of hyphenated lines.
        The benefits of this approach are greater when rendering narrower
        columns of text (eg. on small screens).
      </Justified>
    </Flex>
    -------------------------
    <Flex>
      <Box mr={4} as="p" w="20rem" fontFamily="Georgia" textAlign="justify">
        W innych okolicach kraju rody brały nazwę od zaścianków albo zaścianki
        od rodów jako bywało na Podlasiu; tam zaś, wzdłuż laudańskiego porzecza,
        było inaczej. Tam mieszkali w Morezach Stakjanowie, których swego czasu
        Batory osadził za męstwo okazane pod Pskowem. W Wołmontowiczach na
        dobrej glebie roili się Butrymowie, najdłuższe chłopy z całej Laudy,
        słynni z małomówności i ciężkiej ręki, którzy czasu sejmików, zajazdów
        lub wojen murem w milczeniu iść zwykli. Ziemie w Drożejkanach i Mozgach
        uprawiali liczni Domaszewiczowie, słynni myśliwi; ci puszczą Zielonką aż
        do Wiłkomierza tropem niedźwiedzim chadzali. Gasztowtowie siedzieli w
        Pacunelach; panny ich słynęły pięknością, tak iż w końcu wszystkie
        gładkie dziewczęta w okolicy Krakinowa, Poniewieża i Upity pacunelkami
        nazywano. Sołłohubowie Mali byli bogaci w konie i bydło wyborne, na
        leśnych pastwiskach hodowane; zaś Gościewicze w Goszczunach smołę w
        lasach pędzili, od którego zajęcia zwano ich Gościewiczami Czarnymi albo
        Dymnymi.
      </Box>
      <Justified
        w="20rem"
        fontFamily="Georgia"
        hyphenatePatterns={polishPatterns}
        config={{ doubleHyphenPenalty: 500 }}
      >
        W innych okolicach kraju rody brały nazwę od zaścianków albo zaścianki
        od rodów jako bywało na Podlasiu; tam zaś, wzdłuż laudańskiego porzecza,
        było inaczej. Tam mieszkali w Morezach Stakjanowie, których swego czasu
        Batory osadził za męstwo okazane pod Pskowem. W Wołmontowiczach na
        dobrej glebie roili się Butrymowie, najdłuższe chłopy z całej Laudy,
        słynni z małomówności i ciężkiej ręki, którzy czasu sejmików, zajazdów
        lub wojen murem w milczeniu iść zwykli. Ziemie w Drożejkanach i Mozgach
        uprawiali liczni Domaszewiczowie, słynni myśliwi; ci puszczą Zielonką aż
        do Wiłkomierza tropem niedźwiedzim chadzali. Gasztowtowie siedzieli w
        Pacunelach; panny ich słynęły pięknością, tak iż w końcu wszystkie
        gładkie dziewczęta w okolicy Krakinowa, Poniewieża i Upity pacunelkami
        nazywano. Sołłohubowie Mali byli bogaci w konie i bydło wyborne, na
        leśnych pastwiskach hodowane; zaś Gościewicze w Goszczunach smołę w
        lasach pędzili, od którego zajęcia zwano ich Gościewiczami Czarnymi albo
        Dymnymi.
      </Justified>
    </Flex>
  </>
);
