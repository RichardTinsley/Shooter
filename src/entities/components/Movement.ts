import { Position } from "../../constants/types.js";
import { Level } from "../../handlers/Level.js";
import { Time } from "../../handlers/Time.js";
import { randomFloat } from "../../utilities/math.js";

export enum DIRECTION {
  LEFT = -1,
  RIGHT = 1,
}

export class Movement {
  private waypoints = Level.getEnemyGeneratedWaypoints();
  private waypointIndex: number = 1;
  private priorityDistance: number = 0;

  private speed!: number;
  private delta: number = 0.15;
  private angle!: number;

  setAngle(position: Position, destination: Position): void {
    const dy = destination.y - position.y;
    const dx = destination.x - position.x;
    this.angle = Math.atan2(dy, dx);
  }

  getDirection(angle: number): number {
    if (angle < 1.57 && angle > -1.57) return DIRECTION.RIGHT;
    else return DIRECTION.LEFT;
  }

  updatePosition(position: Position, angle: number, speed: number): void {
    position.x += Math.cos(angle) * speed * Time.deltaTimeMultiplier;
    position.y += Math.sin(angle) * speed * Time.deltaTimeMultiplier;
  }

  getWaypoints(): Position {
    return { ...this.waypoints[this.waypointIndex] };
  }

  getPriorityDistance(): number {
    return this.priorityDistance;
  }

  setSpeed(speed: number): void {
    this.speed = randomFloat(speed - speed * this.delta, speed + speed * this.delta);
  }

  setPriorityDistance(enemy: any): void {
    const dx = enemy.destination.y - enemy.position.y;
    const dy = enemy.destination.x - enemy.position.x;
    this.priorityDistance = Math.round(Math.abs(dx) + Math.abs(dy));
  }
}
