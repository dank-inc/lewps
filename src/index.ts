type ForNCB = (i: number, u: number) => void;
type Opts = {
  type: "lteq" | "lt" | "rev";
};

export const forN = (n: number, fn: ForNCB, opts?: Opts) => {
  if (!opts || opts?.type === "lt") {
    for (let i = 0; i < n; i++) fn(i, i / n);
  }

  if (opts?.type === "lteq") {
    for (let i = 0; i <= n; i++) fn(i, i / n);
  }
};

type ForICB<T> = (item: T, i: number, u: number) => {};
type ForIOpts = {};

export const forI = <T>(arr: T[], fn: ForICB<T>, opts?: ForIOpts) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  }
};
