import { gradingStudents } from "./problem";

describe("Grading Students", () => {
  test("should round up to the next multiple of 5 if the difference is less than 3", () => {
    expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
  });

  test("should not round up if the grade is less than 38", () => {
    expect(gradingStudents([37, 36, 35])).toEqual([37, 36, 35]);
  });

  test("should not round up if the difference to the next multiple of 5 is 3 or more", () => {
    expect(gradingStudents([58, 62, 66])).toEqual([60, 62, 66]);
  });
});
