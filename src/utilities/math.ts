export function oscillate(
  effect: number,
  delta: number,
  min: number,
  max: number
): [number, number] {
  effect += delta;

  if (effect <= min || effect >= max) delta = -delta;

  return [effect, delta];
}
