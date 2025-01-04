type ForNCallback = (i: number, u: number) => void;
type Opts = {
  type: "lteq" | "lt" | "rev";
};

/**
 * Iterates over a range of numbers and calls a callback function for each number
 * @param n The size of the range
 * @param fn Callback function
 * @param opts Optional options object
 */
export const forN = (n: number, fn: ForNCallback, opts?: Opts) => {
  if (!opts || opts?.type === "lt") {
    for (let i = 0; i < n; i++) fn(i, i / (n - 1));
  }

  if (opts?.type === "lteq") {
    for (let i = 0; i <= n; i++) fn(i, i / (n - 1));
  }
};
