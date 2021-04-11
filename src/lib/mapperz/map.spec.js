const { mapU } = require("../../../dist");

test("do the thing", () => {
  console.log(mapU(10), (i) => i);

  expect(mapU(10, () => {}).length).toBe(10);
});
