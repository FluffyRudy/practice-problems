function findUniqueAmongPair(array: Array<number>) {
  let out: number = 0;

  for (const elem of array) {
    out ^= elem;
  }

  return out;
}
