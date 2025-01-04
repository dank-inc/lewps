import { mapU, mapI, mapXY } from "./map";

test("do the thing", () => {
  expect(mapU(10, () => {}).length).toBe(10);
});

test("do the thing", () => {
  expect(mapI(10, () => {}).length).toBe(10);
});

test("do the thing", () => {
  expect(mapXY(10, 10, () => {}).length).toBe(100);
});
