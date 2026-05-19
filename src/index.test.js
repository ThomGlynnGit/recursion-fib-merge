import { fibonacci, mergeSort } from "./index.js";

describe("fibonacci", () => {
  test("returns empty list if 0 provided", () => {
    expect(fibonacci(0)).toStrictEqual([]);
  });
  test("returns correct sequence for n = 2", () => {
    expect(fibonacci(3)).toStrictEqual([0, 1, 1]);
  });
  test("returns correct sequence for n = 8", () => {
    expect(fibonacci(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe.skip("mergeSort", () => {
  test("returns empty list if empty list provided", () => {
    expect(mergeSort([])).toStrictEqual([]);
  });
  test("returns same list if one value provided", () => {
    expect(mergeSort([73])).toStrictEqual([73]);
  });
  test("pre-sorted list returns same list", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });
  test("correctly sorts list of single digits", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });
  test("correctly sorts list of more than single digits", () => {
    expect(mergeSort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
  });
});
