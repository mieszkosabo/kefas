import { createGlobalStyle } from "styled-components";

export const SanitizeCSS = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  background-repeat: no-repeat; /* 2 */
}


::before,
::after {
  text-decoration: inherit; /* 1 */
  vertical-align: inherit; /* 2 */
}


:where(:root) {
  cursor: default; /* 1 */
  line-height: 1.5; /* 2 */
  overflow-wrap: break-word; /* 3 */
  -moz-tab-size: 4; /* 4 */
  tab-size: 4; /* 4 */
  -webkit-tap-highlight-color: transparent; /* 5 */
  -webkit-text-size-adjust: 100%; /* 6 */
  text-size-adjust: 100%; /* 6 */
}

:where(body) {
  margin: 0;
}

:where(h1) {
  font-size: 2em;
  margin: 0.67em 0;
}

:where(dl, ol, ul) :where(dl, ol, ul) {
  margin: 0;
}

:where(hr) {
  color: inherit; /* 1 */
  height: 0; /* 2 */
}

:where(nav) :where(ol, ul) {
  list-style-type: none;
  padding: 0;
}

:where(nav li)::before {
  content: "\200B";
  float: left;
}

:where(pre) {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
  overflow: auto; /* 3 */
}

:where(abbr[title]) {
  text-decoration: underline;
  text-decoration: underline dotted;
}

:where(b, strong) {
  font-weight: bolder;
}

:where(code, kbd, samp) {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

:where(small) {
  font-size: 80%;
}

:where(audio, canvas, iframe, img, svg, video) {
  vertical-align: middle;
}

:where(iframe) {
  border-style: none;
}

:where(svg:not([fill])) {
  fill: currentColor;
}

:where(table) {
  border-collapse: collapse; /* 1 */
  border-color: currentColor; /* 2 */
  text-indent: 0; /* 3 */
}

:where(button, input, select) {
  margin: 0;
}

:where(button, [type="button" i], [type="reset" i], [type="submit" i]) {
  -webkit-appearance: button;
}

:where(fieldset) {
  border: 1px solid #a0a0a0;
}

:where(progress) {
  vertical-align: baseline;
}

:where(textarea) {
  margin: 0; /* 1 */
  resize: vertical; /* 3 */
}

:where([type="search" i]) {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

:where(dialog) {
  background-color: white;
  border: solid;
  color: black;
  height: -moz-fit-content;
  height: fit-content;
  left: 0;
  margin: auto;
  padding: 1em;
  position: absolute;
  right: 0;
  width: -moz-fit-content;
  width: fit-content;
}

:where(dialog:not([open])) {
  display: none;
}

:where(details > summary:first-of-type) {
  display: list-item;
}

:where([aria-busy="true" i]) {
  cursor: progress;
}

:where([aria-disabled="true" i], [disabled]) {
  cursor: not-allowed;
}

:where([aria-hidden="false" i][hidden]) {
  display: initial;
}

:where([aria-hidden="false" i][hidden]:not(:focus)) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}
`;
