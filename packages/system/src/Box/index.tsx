import styled from "styled-components";
import { composedStyleFunctions } from "..";
import { HTMLKefasProps, KefasComponent } from "../types";

export type BoxProps = HTMLKefasProps<"div">;

export const Box: KefasComponent<"div"> = styled.div`
  ${composedStyleFunctions}
`;
