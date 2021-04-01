import { forU } from "./lib/forU";

console.log("forU 10 steps");
forU(10, (u) => {
  console.log(u);
});

console.log("forU 10 steps, -2..5");
forU(
  10,
  (u) => {
    console.log(u * 100);
  },
  { start: -2, end: 5 }
);
