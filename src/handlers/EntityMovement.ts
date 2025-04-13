import { Position } from "../constants/types.js";
import { Time } from "./Time.js";
import { randomFloat } from "../utilities/math.js";

export enum DIRECTION {
  LEFT = -1,
  RIGHT = 1,
}

export class EntityMovement {
  private speed: number = 1;
  private angle!: number;
  private direction!: number;

  move(position: Position, destination: Position) {
    this.updateAngle(position, destination);
    this.updateMovement(position);
    this.updateDirection();
  }

  updateAngle(position: Position, destination: Position) {
    const dy = destination.y - position.y;
    const dx = destination.x - position.x;
    this.angle = Math.atan2(dy, dx);
  }

  updateDirection() {
    if (this.angle < 1.57 && this.angle > -1.57)
      this.direction = DIRECTION.RIGHT;
    else this.direction = DIRECTION.LEFT;
  }

  updateMovement(position: Position) {
    position.x += Math.cos(this.angle) * this.speed * Time.deltaTimeMultiplier;
    position.y += Math.sin(this.angle) * this.speed * Time.deltaTimeMultiplier;
  }

  setSpeed(speed: number): this {
    this.speed = randomFloat(speed - speed * 0.2, speed + speed * 0.2);
    return this;
  }

  getDirection(): number {
    return this.direction;
  }
}
