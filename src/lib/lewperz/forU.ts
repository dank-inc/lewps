export type ForUCallback = (u: number) => void;

type Options = {
  start: number;
  end: number;
};

export const forU = (steps: number, fn: ForUCallback, opts?: Options) => {
  const start = opts?.start || 0;
  const end = opts?.end || 1;

  for (let i = 0; i < steps; i += 1) {
    const u = (i / (steps - 1)) * (end - start) + start;
    fn(u);
  }
};
