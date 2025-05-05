import { Position } from "../../../constants/types.js";
import { Level } from "../../../handlers/Level.js";
import { enemyMovement } from "../../../utilities/entityMovement.js";
import { randomFloat } from "../../../utilities/math.js";

export class Movement {
  private waypoints = Level.getEnemyGeneratedWaypoints();
  private waypointIndex: number = 1;
  private priorityDistance: number = 0;

  private speed!: number;
  private delta: number = 0.15;
  private angle!: number;

  update(enemy: any) {
    enemyMovement(enemy);
  }

  getWaypoints(): Position {
    return { ...this.waypoints[this.waypointIndex] };
  }

  getPriorityDistance(): number {
    return this.priorityDistance;
  }

  setSpeed(speed: number) {
    this.speed = randomFloat(
      speed - speed * this.delta,
      speed + speed * this.delta
    );
  }

  setPriorityDistance(enemy: any) {
    const dx = enemy.destination.y - enemy.position.y;
    const dy = enemy.destination.x - enemy.position.x;
    this.priorityDistance = Math.round(Math.abs(dx) + Math.abs(dy));
  }
}
