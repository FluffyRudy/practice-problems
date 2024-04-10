function gradingStudents(grades: number[]): number[] {
  const getNextMultipleOf5 = (num: number) => num + (5 - (num % 5));
  return grades.map((mark) =>
    mark >= 38 && getNextMultipleOf5(mark) - mark < 3
      ? getNextMultipleOf5(mark)
      : mark
  );
}
