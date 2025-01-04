import { forN } from "../lewperz/forN";
import { forU } from "../lewperz/forU";

/**
 * Creates an array of cloned objects with incremented property values
 * @template T - Type of the object to clone
 * @param {T} thing - The object to clone
 * @param {number} n - Number of clones to create
 * @param {keyof T} property - Property to increment in each clone
 * @returns {T[]} Array of cloned objects
 */
export const cloneU = <T>(thing: T, n: number, property: keyof T): T[] => {
  const arr: T[] = [];
  forU(n, (u) => arr.push({ ...thing, [property]: u }));
  return arr;
};

/**
 * Creates an array of cloned objects with custom modifications
 * @template T - Type of the object to clone
 * @param {T} thing - The object to clone
 * @param {number} n - Number of clones to create
 * @param {(u: number) => Partial<T>} cb - Callback function to modify each clone
 * @returns {T[]} Array of modified clones
 */
export const cloneMap = <T>(
  thing: T,
  n: number,
  cb: (u: number) => Partial<T>
): T[] => {
  const arr: T[] = [];
  forU(n, (u) => {
    const item = { ...thing, ...cb(u) };

    arr.push(item);
  });
  return arr;
};

/**
 * Maps a range of numbers to an array using a callback function
 * @template T - Type of the output array elements
 * @param {number} n - Size of the range
 * @param {(u: number) => T} cb - Mapping function
 * @returns {T[]} Mapped array
 */
export const mapU = <T>(n: number, cb: (u: number) => T): T[] => {
  const arr: T[] = [];
  forU(n, (u) => arr.push(cb(u)));
  return arr;
};

/**
 * Maps a range of indices to an array using a callback function
 * @template T - Type of the output array elements
 * @param {number} n - Size of the range
 * @param {(i: number) => T} cb - Mapping function
 * @returns {T[]} Mapped array
 */
export const mapI = <T>(n: number, cb: (i: number) => T): T[] => {
  const arr: T[] = [];
  forN(n, (i) => arr.push(cb(i)));
  return arr;
};

/**
 * Maps a 2D coordinate space to a 1D array using a callback function
 * @template T - Type of the output array elements
 * @param {number} x - Width of the coordinate space
 * @param {number} y - Height of the coordinate space
 * @param {(u: number, v: number) => T} cb - Mapping function
 * @returns {T[]} Mapped array
 */
export const mapXY = <T>(
  x: number,
  y: number,
  cb: (u: number, v: number) => T
): T[] => {
  const arr: T[] = [];
  forN(y, (_, v) => forN(x, (_, u) => arr.push(cb(u, v))));
  return arr;
};
