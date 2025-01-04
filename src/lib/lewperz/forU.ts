export type ForUCallback = (u: number) => void;

type Options = {
  start: number;
  end: number;
};

/**
 * Iterates over a range of numbers and calls a callback function for each number
 * @param steps The size of the range
 * @param fn Callback function
 * @param opts Optional options object
 */
export const forU = (steps: number, fn: ForUCallback, opts?: Options) => {
  const start = opts?.start || 0;
  const end = opts?.end || 1;

  for (let i = 0; i < steps; i += 1) {
    const u = (i / (steps - 1)) * (end - start) + start;
    fn(u);
  }
};
