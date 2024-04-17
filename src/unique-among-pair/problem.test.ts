import { findUniqueAmongPair } from "./problem";

describe("findUniqueAmongPair", () => {
  test("should return unique numbers among pair", () => {
    expect(findUniqueAmongPair([1, 2, 2, 1, 4, 5, 4])).toBe(5);
    expect(findUniqueAmongPair([7, 3, 5, 5, 3])).toBe(7);
    expect(findUniqueAmongPair([9, 9, 2])).toBe(2);
    expect(findUniqueAmongPair([-1, -1, 2])).toBe(2);
  });
});
