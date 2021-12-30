export function narrowRange(min: number, max: number) {
  return function (value: number) {
    return Math.min(max, Math.max(min, value));
  };
}
