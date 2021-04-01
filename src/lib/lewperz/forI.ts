type ForICallback<T> = (item: T, i: number, u: number) => {};
type ForIOpts = {};

export const forI = <T>(arr: T[], fn: ForICallback<T>, opts?: ForIOpts) => {
  for (let i = 0; i < arr.length; i++) fn(arr[i], i, i / arr.length);
};
