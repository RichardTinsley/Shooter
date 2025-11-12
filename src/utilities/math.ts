import { Position } from "../types/types.js";

export enum DIRECTION {
  LEFT = -1,
  RIGHT = 1,
}

export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomFloat(min: number, max: number): number {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}

export function setAngle(position: Position, destination: Position): number {
  return Math.atan2(destination.y - position.y, destination.x - position.x);
}

export function getDirection(angle: number): number {
  if (angle < 1.57 && angle > -1.57) return DIRECTION.RIGHT;
  else return DIRECTION.LEFT;
}

export function updatePosition(position: Position, angle: number, speed: number): void {
  // position.x += Math.cos(angle) * speed * Time.deltaTimeMultiplier;
  // position.y += Math.sin(angle) * speed * Time.deltaTimeMultiplier;
}

// export function getWaypoints(): Position {
//   return { ...this.waypoints[this.waypointIndex] };
// }

export function setSpeed(speed: number, delta: number): number {
  return (speed = randomFloat(speed - speed * delta, speed + speed * delta));
}

export function setPriorityDistance(enemy: any): number {
  const dx = enemy.destination.y - enemy.position.y;
  const dy = enemy.destination.x - enemy.position.x;
  return Math.round(Math.abs(dx) + Math.abs(dy));
}
