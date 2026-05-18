import { fibonacci, mergeSort } from "./index.js";

describe("fibonacci", () => {
  test("returns empty list if 0 provided", () => {
    expect(fibonacci(0)).toStrictEqual([]);
  });
  test("returns correct sequence for n = 2", () => {
    expect(fibonacci(3)).toBe([0, 1, 1]);
  });
  test("returns correct sequence for n = 8", () => {
    expect(fibonacci(3)).toBe([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe.skip("mergeSort", () => {
  test("returns empty list if empty list provided", () => {
    expect(mergeSort([])).toStrictEqual([]);
  });
});
