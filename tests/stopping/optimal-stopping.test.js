const optimalStopping = require("../../dist/algorithms/stopping/optimal-stopping");
const testFn = (a) => a.name.length;

const testArr = [
  { name: "sam" },
  { name: "jesre" },
  { name: "sophie" },
  { name: "samuel" },
  { name: "jacob" },
  { name: "isaac" },
  { name: "danielle" },
  { name: "natalie" },
  { name: "rebecca" },
  { name: "carl" },
  { name: "sam" },
  { name: "jesre" },
  { name: "sophie" },
  { name: "samuel" },
  { name: "jacob" },
  { name: "isaac" },
  { name: "danielle" },
  { name: "natalie" },
  { name: "rebecca" },
  { name: "carl" },
  { name: "sam" },
  { name: "jesre" },
  { name: "sophie" },
  { name: "samuel" },
  { name: "jacob" },
  { name: "isaac" },
  { name: "danielle" },
  { name: "natalie" },
  { name: "rebecca" },
  { name: "carl" },
  { name: "sam" },
  { name: "jesre" },
  { name: "sophie" },
  { name: "samuel" },
  { name: "jacob" },
  { name: "isaac" },
  { name: "danielle" },
  { name: "cassandra" },
  { name: "natalie" },
  { name: "rebecca" },
  { name: "carl" },
];
test("optimally stops", () => {
  expect(optimalStopping(testFn)(testArr)).toStrictEqual({ name: "danielle" });
});

test("handles bad input", () => {
  expect(optimalStopping(testFn)([])).toBe(undefined);
});

test("handles lengths 1, 2, 3", () => {
  expect(optimalStopping(testFn)([{ name: "sam" }])).toStrictEqual({
    name: "sam",
  });

  expect(
    optimalStopping(testFn)([{ name: "sam" }, { name: "jesre" }])
  ).toStrictEqual({ name: "jesre" });

  expect(
    optimalStopping(testFn)([
      { name: "sam" },
      { name: "jesre" },
      { name: "danielle" },
    ])
  ).toStrictEqual({ name: "danielle" });
});
