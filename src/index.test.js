import { fibonacci, mergeSort } from "./index.js";

describe("fibonacci", () => {
  test("returns 0 if 0 provided", () => {
    expect(fibonacci(0)).toBe(0);
  });
});

describe("mergeSort", () => {
  test("returns empty list if empty list provided", () => {
    expect(mergeSort([])).toStrictEqual([]);
  });
});
