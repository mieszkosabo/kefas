import Hypher, { Patterns } from 'hypher';

export const createHypenator = (patterns: Patterns) => {
  const hypher = new Hypher(patterns);
  return (word: string) => hypher.hyphenate(word);
}
