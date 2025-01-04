import { forI } from "./forI";
import { forN } from "./forN";
import { forU } from "./forU";

test("do the thing", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result: number[] = [];
  forI(arr, (i) => result.push(i));
  expect(result).toEqual(arr);
});

test("do the thing", () => {
  const result: number[] = [];
  forN(10, (i) => result.push(i));
  expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("do the thing", () => {
  const result: number[] = [];
  forU(10, (i) => result.push(i));
  expect(result).toEqual([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
});

// todo deeper tests for complicated shit
