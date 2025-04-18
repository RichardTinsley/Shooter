import { Position } from "../constants/types.js";
import { Time } from "../handlers/Time.js";

export enum DIRECTION {
  LEFT = -1,
  RIGHT = 1,
}

export function setAngle(position: Position, destination: Position) {
  const dy = destination.y - position.y;
  const dx = destination.x - position.x;
  return Math.atan2(dy, dx);
}

export function getDirection(angle: number) {
  if (angle < 1.57 && angle > -1.57) return DIRECTION.RIGHT;
  else return DIRECTION.LEFT;
}

export function updatePosition(
  position: Position,
  angle: number,
  speed: number
) {
  position.x += Math.cos(angle) * speed * Time.deltaTimeMultiplier;
  position.y += Math.sin(angle) * speed * Time.deltaTimeMultiplier;
}
