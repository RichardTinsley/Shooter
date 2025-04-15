import { Position } from "../../constants/types.js";
import { EntityMovement, DIRECTION } from "../../handlers/EntityMovement.js";
import { HUD } from "../../GUI/HUD/HUD.js";
import { Level } from "../../handlers/Level.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";

export class EnemyMovement {
  protected position!: Position;
  protected destination!: Position;

  protected waypoints!: Array<Position>;
  protected waypointIndex: number = 1;
  protected priorityDistance: number = 0;

  protected movement = new EntityMovement();

  constructor() {
    this.waypoints = Level.getEnemyGeneratedWaypoints();
    this.setPosition(this.waypoints[this.waypointIndex]);
    this.setDestination(this.waypoints[this.waypointIndex]);
  }

  checkWaypointArrival(setComponentPositions: Function) {
    if (checkCircleCollision(this.position, this.destination, 5, 10)) {
      this.waypointIndex++;
      if (this.waypointIndex === this.waypoints.length) {
        HUD.hudLives.setLives();
        this.waypointIndex = 0;
        this.setPosition(this.waypoints[this.waypointIndex]);
        this.setDestination(this.waypoints[this.waypointIndex]);
        setComponentPositions();
      }

      this.setDestination(this.waypoints[this.waypointIndex]);
    }
  }

  updatePriorityDistance() {
    const yDistance = this.destination.y - this.position.y;
    const xDistance = this.destination.x - this.position.x;
    this.priorityDistance = Math.round(
      Math.abs(xDistance) + Math.abs(yDistance)
    );
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
    this.movement.setSpeed(speed);
    return this;
  }

  getPriorityDistance(): number {
    return this.priorityDistance;
  }

  contextSave(ctx: CanvasRenderingContext2D) {
    if (this.movement.getDirection() === DIRECTION.LEFT) {
      ctx.save();
      ctx.scale(DIRECTION.LEFT, 1);
      this.position.x *= -1;
    }
  }

  contextRestore(ctx: CanvasRenderingContext2D) {
    if (this.movement.getDirection() === DIRECTION.LEFT) {
      this.position.x *= -1;
      ctx.restore();
    }
  }
}
