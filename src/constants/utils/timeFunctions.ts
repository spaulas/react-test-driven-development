const timeIncrements = (
  nSlots: number,
  start: number,
  increment: number
): Array<number> =>
  Array(nSlots)
    .fill(start)
    .reduce((acc, _, i) => [...acc, start + i * increment], []);

export { timeIncrements };
