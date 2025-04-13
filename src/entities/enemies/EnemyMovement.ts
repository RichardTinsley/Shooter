import { Position } from "../../constants/types.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { HUD } from "../../handlers/HUD.js";
import { EntityMovement, DIRECTION } from "../../handlers/EntityMovement.js";
import { Level } from "../../handlers/Level.js";

export class EnemyMovement {
  protected position!: Position;
  protected destination!: Position;

  private waypoints!: Array<Position>;
  private waypointIndex: number = 1;
  private priorityDistance: number = 0;

  protected movement = new EntityMovement();

  constructor() {
    this.waypoints = Level.getEnemyGeneratedWaypoints();
    this.setPosition({ ...this.waypoints[this.waypointIndex] });
    this.setDestination({ ...this.waypoints[this.waypointIndex] });
  }

  update() {
    this.checkWaypointArrival();
    this.movement.move(this.position, this.destination);
  }

  checkWaypointArrival() {
    if (checkCircleCollision(this.position, this.destination, 5, 10)) {
      this.setDestination(this.waypoints[(this.waypointIndex += 1)]);

      if (this.waypointIndex === this.waypoints.length) {
        HUD.hudLives.setLives();
        this.waypointIndex = 0;
        this.setDestination(this.waypoints[this.waypointIndex]);
        this.setPosition(this.waypoints[this.waypointIndex]);
      }
    }
  }

  setPosition(position: Position): this {
    this.position = { ...position };
    return this;
  }

  setDestination(destination: Position): this {
    this.destination = { ...destination };
    return this;
  }

  getPriorityDistance(): number {
    return this.priorityDistance;
  }

  updatePriorityDistance() {
    const yDistance = this.destination.y - this.position.y;
    const xDistance = this.destination.x - this.position.x;
    this.priorityDistance = Math.round(
      Math.abs(xDistance) + Math.abs(yDistance)
    );
  }

  contextSave(ctx: CanvasRenderingContext2D) {
    if (this.movement.getDirection() === DIRECTION.LEFT) {
      ctx.save();
      ctx.scale(this.movement.getDirection(), 1);
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
