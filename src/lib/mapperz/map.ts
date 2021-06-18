import { forN } from "../lewperz/forN";
import { forU } from "../lewperz/forU";

export const cloneU = <T>(thing: T, n: number, property: keyof T): T[] => {
  const arr: T[] = [];
  forU(n, (u) => arr.push({ ...thing, [property]: u }));
  return arr;
};

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

export const mapItems = <T, R extends Record<string, any>>(
  items: T[],
  cb: (item: T, i: number, u: number) => R
) => {
  // for items
  // callback
};

export const mapU = <T>(n: number, cb: (u: number) => T): T[] => {
  const arr: T[] = [];
  forU(n, (u) => arr.push(cb(u)));
  return arr;
};

export const mapI = <T>(n: number, cb: (i: number) => T): T[] => {
  const arr: T[] = [];
  forN(n, (i) => arr.push(cb(i)));
  return arr;
};

export const mapXY = <T>(
  x: number,
  y: number,
  cb: (u: number, v: number) => T
): T[] => {
  const arr: T[] = [];
  forN(y, (_, v) => forN(x, (_, u) => arr.push(cb(u, v))));
  return arr;
};
