type ForICallback<T> = (item: T, i: number, u: number) => {};
type ForIOpts = {};

/**
 * Iterates over an array and calls a callback function for each element
 * @param arr The array to iterate over
 * @param fn Callback function
 * @param opts Optional options object
 */
export const forI = <T>(arr: T[], fn: ForICallback<T>, opts?: ForIOpts) => {
  for (let i = 0; i < arr.length; i++) fn(arr[i], i, i / arr.length);
};
