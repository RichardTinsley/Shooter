export function oscillate(
  effect: number,
  delta: number,
  min: number,
  max: number
): [number, number] {
  if (effect <= min || effect > max) delta = -delta;

  effect += delta;
  return [effect, delta];
}
