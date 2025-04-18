import { Position } from "../../constants/types.js";
import { HUD } from "../../GUI/HUD/HUD.js";
import { Level } from "../../handlers/Level.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { randomFloat } from "../../utilities/math.js";
import * as MOVEMENT from "../../utilities/entityMovement.js";

export class EnemyMovement {
  protected waypoints = Level.getEnemyGeneratedWaypoints();
  protected waypointIndex: number = 1;
  protected priorityDistance: number = 0;
  protected position: Position = { ...this.waypoints[this.waypointIndex] };
  protected destination: Position = { ...this.waypoints[this.waypointIndex] };

  protected speed!: number;
  protected angle = MOVEMENT.setAngle(this.position, this.destination);

  update(enemy: any) {
    MOVEMENT.updatePosition(this.position, this.angle, this.speed);
    this.updatePriorityDistance();
    this.checkWaypointArrival(enemy);
  }

  checkWaypointArrival(enemy: any) {
    if (checkCircleCollision(this.position, this.destination, 5, 10)) {
      this.waypointIndex++;

      if (this.waypointIndex === this.waypoints.length) {
        HUD.hudLives.setLives();
        this.waypointIndex = 0;
        this.setPosition(this.waypoints[this.waypointIndex]);

        enemy.sprite.setPosition(this.position);
        enemy.hitDetection.setPosition(this.position);
        enemy.healthBar.setPosition(this.position);
        enemy.position = this.position;
      }

      this.setDestination(this.waypoints[this.waypointIndex]);
      this.angle = MOVEMENT.setAngle(this.position, this.destination);
      enemy.sprite.setDirection(MOVEMENT.getDirection(this.angle));
    }
  }

  updatePriorityDistance() {
    const dx = this.destination.y - this.position.y;
    const dy = this.destination.x - this.position.x;
    this.priorityDistance = Math.round(Math.abs(dx) + Math.abs(dy));
  }

  getPosition(): Position {
    return this.position;
  }

  setPosition(position: Position): this {
    this.position = { ...position };
    return this;
  }

  setDestination(destination: Position): this {
    this.destination = { ...destination };
    return this;
  }

  setSpeed(speed: number): this {
    this.speed = randomFloat(speed - speed * 0.1, speed + speed * 0.1);
    return this;
  }

  getPriorityDistance(): number {
    return this.priorityDistance;
  }
}
