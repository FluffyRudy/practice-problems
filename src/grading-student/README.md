# Grading Students Problem

## Question

HackerLand University has a unique grading policy:
- Every student receives a grade in the inclusive range from 0 to 100.
- Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:
- If the difference between the grade and the next multiple of 5 is less than 3, round the grade up to the next multiple of 5.
- If the value of the grade is less than 38, no rounding occurs as the result will still be a failing grade[^1^][1][^2^][2].

The task is to automate the rounding process. Given the initial value of grades for each of Sam's students, write code to automate the rounding process.

### Function Signature

```typescript
function gradingStudents(grades: number[]): number[]
