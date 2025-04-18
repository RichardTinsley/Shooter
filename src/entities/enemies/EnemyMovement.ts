import { Position } from "../../constants/types.js";
import { HUD } from "../../GUI/HUD/HUD.js";
import { Level } from "../../handlers/Level.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { randomFloat } from "../../utilities/math.js";
import * as MOVEMENT from "../../utilities/entityMovement.js";

export class EnemyMovement {
  protected position!: Position;
  protected destination!: Position;

  protected speed!: number;
  protected angle!: number;
  protected direction!: number;

  protected waypoints!: Array<Position>;
  protected waypointIndex: number = 1;
  protected priorityDistance: number = 0;

  constructor() {
    this.waypoints = Level.getEnemyGeneratedWaypoints();
    this.setPosition(this.waypoints[this.waypointIndex]);
    this.setDestination(this.waypoints[this.waypointIndex]);
    this.angle = MOVEMENT.setAngle(this.position, this.destination);
    this.direction = MOVEMENT.getDirection(this.angle);
  }

  update(updateComponents: Function) {
    MOVEMENT.updatePosition(this.position, this.angle, this.speed);
    this.updatePriorityDistance();
    this.checkWaypointArrival(updateComponents);
  }

  checkWaypointArrival(updateComponents: Function) {
    if (checkCircleCollision(this.position, this.destination, 5, 10)) {
      this.waypointIndex++;

      if (this.waypointIndex === this.waypoints.length) {
        HUD.hudLives.setLives();
        this.waypointIndex = 0;
        this.setPosition(this.waypoints[this.waypointIndex]);
        // this.setDestination(this.waypoints[this.waypointIndex]);

        // this.sprite.setPosition(this.position);
        // this.hitDetection.setPosition(this.position);
        // this.healthBar.setPosition(this.position);
        updateComponents(this.position);
      }

      this.setDestination(this.waypoints[this.waypointIndex]);
      this.angle = MOVEMENT.setAngle(this.position, this.destination);
      this.direction = MOVEMENT.getDirection(this.angle);
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
    this.speed = randomFloat(speed - speed * 0.2, speed + speed * 0.2);
    return this;
  }

  getPriorityDistance(): number {
    return this.priorityDistance;
  }

  getDirection(): number {
    return this.direction;
  }
}
