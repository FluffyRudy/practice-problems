function missingNumber(numbers: number[]): number {
  const max = Math.max.apply(null, numbers);
  const min = Math.min.apply(null, numbers);
  const sumUptoMin = ((min - 1) * min) / 2;
  const naturalSum = (max * (max + 1)) / 2;
  const arrSum = numbers.reduce((sum, num) => sum + num, 0);
  return naturalSum - (sumUptoMin + arrSum);
}
