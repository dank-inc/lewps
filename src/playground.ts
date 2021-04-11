import { forU, mapXY } from ".";

console.log("forU 10 steps");
const a: number[] = [];
forU(10, (u) => {
  a.push(u);
});
console.log(a.length, a);
console.log("forU 10 steps, -2..5");

const b: number[] = [];
forU(10, (u) => b.push(u), { start: -2, end: 5 });
console.log(b.length, b);

const c: number[] = [];
forU(10, (u) => c.push(u), { start: 2, end: -5 });
console.log(c.length, c);

console.log("mapXY 10 steps");
const d = mapXY(3, 3, (u, v) => [u, v]);

console.log(d.length, d);
