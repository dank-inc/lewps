export type ForUCallback = (u: number) => void;

type Options = {
  start: number;
  end: number;
};

export const forU = (steps: number, fn: ForUCallback, opts?: Options) => {
  const start = opts?.start || 0;
  const end = opts?.end || 1;

  const step = (end - start) / steps;

  for (let u = start; u <= end; u += step) fn(u);
};
