export const isSpace = (word: string) => /\s/.test(word.charAt(0));

export const unique = <T>(arr: Array<T>): Array<T> => {
  const length = arr.length;
  const result = [];
  const seen = new Set();

  for (let i = 0; i < length; i++) {
    const value = arr[i];
    if (seen.has(value)) {
      continue;
    }
    seen.add(value);
    result.push(value);
  }
  return result;
};
