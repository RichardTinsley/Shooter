export const enum Oscillations {
  Sin,
  Cosine,
  Square,
  Sawtooth,
  Triangle,
}

export function oscillate(
  waveType: number,
  startTime: number,
  frequency: number,
  amplitude: number
): number {
  const time: number = (Date.now() - startTime) / 1000;
  const x = time * frequency;
  const adj = x < 0 ? amplitude : -amplitude;

  switch (waveType) {
    case Oscillations.Sin:
      return Math.sin(2 * Math.PI * x) * amplitude;
    case Oscillations.Cosine:
      return Math.cos(2 * Math.PI * x) * amplitude;
    case Oscillations.Square:
      return Math.floor(Math.sin(2 * Math.PI * x)) * amplitude * 2 + amplitude;
    case Oscillations.Sawtooth:
      return ((x % frequency) / frequency) * amplitude * 2 + adj;
    case Oscillations.Triangle:
      return (Math.abs(((x % frequency) / frequency) * amplitude * 2 + adj) - amplitude / 2) * 2;
    default:
      return 0;
  }
}
