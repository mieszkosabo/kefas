# Justify

## ⚠️ EXPERIMENTAL - WORK IN PROGRESS

The aim of this package is to provide an easy way to achieve perfectly justified paragraphs.


## Execution plan

1. Come up with a way to transform text provided to the component to a format that works with the Knuth-Plass algorithm.
2. Perform the Knuth-Plass algorithm and produce output that could be interpreted by html/css.
3. Integrate everything together, add extensions, rewrite the computational part in WASM.
