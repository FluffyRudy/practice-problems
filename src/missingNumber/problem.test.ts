import { missingNumber } from "./problem";

describe("missingNumber", () => {
  const testArray = [
    [3, 7, 1, 2, 8, 4, 5],
    [1, 3, 4, 5, 6],
    [1, 2, 3, 5],
    [5, 4, 2, 1],
    [1, 3],
  ];
  const answers = [6, 2, 4, 3, 2];

  testArray.forEach((elem, index) => {
    it("should return the missing number from a list of consecutive numbers", () => {
      expect(missingNumber(elem)).toBe(answers[index]);
    });
  });

  // manually
  //   it("should return the missing number from a list of consecutive numbers", () => {
  //     expect(missingNumber([3, 7, 1, 2, 8, 4, 5])).toBe(6);
  //   });

  //   it("should return the missing number from a list of consecutive numbers", () => {
  //     expect(missingNumber([1, 3, 4, 5, 6])).toBe(2);
  //   });

  //   it("should return the missing number from a list of consecutive numbers", () => {
  //     expect(missingNumber([1, 2, 3, 5])).toBe(4);
  //   });

  //   it("should return the missing number from a list of consecutive numbers", () => {
  //     expect(missingNumber([5, 4, 2, 1])).toBe(3);
  //   });

  // it("should return the missing number from a list of consecutive numbers", () => {
  //   expect(missingNumber([1, 3])).toBe(2);
  // });
});
