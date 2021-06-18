export const forI = <T>(
  arr: T[],
  fn: (item: T, i: number, u: number) => any
) => {
  for (let i = 0; i < arr.length; i++) fn(arr[i], i, i / arr.length);
};
