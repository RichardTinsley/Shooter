export const enum OSCILLATIONS {
  SIN,
  COSINE,
  SQUARE,
  SAWTOOTH,
  TRIANGLE,
}

export function oscillate(
  waveType: number,
  frequency: number,
  amplitude: number
): number {
  const time: number = Date.now() / 1000;
  const x = time * frequency;
  const adj = x < 0 ? amplitude : -amplitude;

  switch (waveType) {
    case OSCILLATIONS.SIN:
      return Math.sin(2 * Math.PI * x) * amplitude;
    case OSCILLATIONS.COSINE:
      return Math.cos(2 * Math.PI * x) * amplitude;
    case OSCILLATIONS.SQUARE:
      return Math.floor(Math.sin(2 * Math.PI * x)) * amplitude * 2 + amplitude;
    case OSCILLATIONS.SAWTOOTH:
      return ((x % frequency) / frequency) * amplitude * 2 + adj;
    case OSCILLATIONS.TRIANGLE:
      return (
        (Math.abs(((x % frequency) / frequency) * amplitude * 2 + adj) -
          amplitude / 2) *
        2
      );
    default:
      return 0;
  }
}
