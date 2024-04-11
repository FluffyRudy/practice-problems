# Consecutive Sum Problem

## Question
- For given array of counsecutive numbers your task is to find a number that is missing

## Note
- Missing number will always be between **minimum** number to **maximum** number and numbers at opening and ending wont be consider as missing numbers
  ### Example
  ```typescript
    const array = [1, 3] //missing 2, valid
    const array = [2, 3] //invalid
  ```

### Function Signature

```typescript
function consecutiveSum(numbers: number[]): number
