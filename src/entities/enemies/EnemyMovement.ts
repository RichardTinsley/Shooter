import { Position } from "../../constants/types.js";
import { HUD } from "../../GUI/HUD/HUD.js";
import { Level } from "../../handlers/Level.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import * as MOVEMENT from "../../utilities/entityMovement.js";
import { randomFloat } from "../../utilities/math.js";

export class EnemyMovement {
  private waypoints = Level.getEnemyGeneratedWaypoints();
  private waypointIndex: number = 1;
  private priorityDistance: number = 0;

  public speed!: number;
  public speedDelta: number = 0.15;
  private angle!: number;

  update(enemy: any) {
    if (checkCircleCollision(enemy.position, enemy.destination, 5, 10)) {
      this.waypointIndex++;

      if (this.waypointIndex === this.waypoints.length) {
        HUD.hudLives.setLives();
        this.waypointIndex = 0;
        enemy.setPosition(this.waypoints[this.waypointIndex]);

        enemy.sprite.setPosition(enemy.position);
        enemy.hitDetection.setPosition(enemy.position);
        enemy.healthBar.setPosition(enemy.position);
      }

      enemy.setDestination(this.waypoints[this.waypointIndex]);
      this.angle = MOVEMENT.setAngle(enemy.position, enemy.destination);
      enemy.sprite.setDirection(MOVEMENT.getDirection(this.angle));
    }

    MOVEMENT.updatePosition(enemy.position, this.angle, this.speed);
    this.setPriorityDistance(enemy);
  }

  getWaypoints(): Position {
    return { ...this.waypoints[this.waypointIndex] };
  }

  getPriorityDistance(): number {
    return this.priorityDistance;
  }

  setSpeed(speed: number): this {
    this.speed = randomFloat(
      speed - speed * this.speedDelta,
      speed + speed * this.speedDelta
    );
    return this;
  }

  setPriorityDistance(enemy: any) {
    const dx = enemy.destination.y - enemy.position.y;
    const dy = enemy.destination.x - enemy.position.x;
    this.priorityDistance = Math.round(Math.abs(dx) + Math.abs(dy));
  }
}
