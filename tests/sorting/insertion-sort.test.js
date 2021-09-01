const insertionSort = require("../../dist/algorithms/sorting/insertion-sort");

const testFn = (a, b) => a >= b;
const testArr = [1, 5, 2, 4, 6, 7, 8, 9, 2, 4, 5, 6];
test("it sorts!", () => {
  expect(insertionSort(testFn)(testArr)).toStrictEqual([
    9, 8, 7, 6, 6, 5, 5, 4, 4, 2, 2, 1,
  ]);
});
