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

export function giveAngle(a: any, b: any): number {
  const dy = a.y - b.y;
  const dx = a.x - b.x;
  return Math.atan2(dy, dx);
}

export enum DIRECTION {
  LEFT = -1,
  RIGHT = 1,
}

export function giveDirection(angle: number): number {
  if (angle < 1.57 && angle > -1.57) return DIRECTION.RIGHT;
  else return DIRECTION.LEFT;
}

export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomPositiveNegavtiveNumberNEW(neg: number, pos: number) {
  return Math.ceil(Math.random() * (pos + neg)) - neg;
}

// export function randomPositiveFloat(range){
//   const randomNumber = Math.random() * range;
//   return Math.round(randomNumber * 100) / 100
// }

// export function randomPositiveOrNegativeNumber(range){
//   const positiveOrNegative = Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1
//   return Math.floor(Math.random() * range) * positiveOrNegative;
// }

// export function generateEnemySpeed(enemySpeedMaximum){
//   const enemySpeedMinimum = 0.5;
//   return randomPositiveFloat(enemySpeedMaximum) + enemySpeedMinimum;
// }
