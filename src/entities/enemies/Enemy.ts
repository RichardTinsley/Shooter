import { Position } from "../../constants/types.js";
import { HealthBar } from "../../GUI/components/HealthBar.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { drawEntityShadow } from "../../utilities/drawShapes.js";
import { DIRECTION } from "../../utilities/math.js";
import { MovingSprite } from "../MovingSprite.js";

export class Enemy extends MovingSprite {
  private healthBar = new HealthBar(this.width);
  protected waypointIndex = 0;

  constructor(
    position: Position,
    fileName: string,
    spriteWidth: number,
    spriteHeight: number,
    protected waypoints: Array<Position>
  ) {
    super(position, fileName, spriteWidth, spriteHeight);
    this.destination = { ...position };
    this.updateHealthBarPosition();
  }

  draw(ctx: CanvasRenderingContext2D) {
    drawEntityShadow(ctx, this.position, this.width);
    this.contextSave(ctx);
    super.draw(ctx);
    this.contextRestore(ctx);
    this.healthBar.draw(ctx);
  }

  update() {
    super.update();
    this.updateSpriteDrawPosition();
    this.updateHealthBarPosition();
    this.checkWaypointArrival();
    this.checkEndpointArrival();
  }

  contextSave(ctx: CanvasRenderingContext2D) {
    if (this.direction === DIRECTION.LEFT) {
      ctx.save();
      ctx.scale(this.direction, 1);
      this.position.x *= -1;
    }
  }

  contextRestore(ctx: CanvasRenderingContext2D) {
    if (this.direction === DIRECTION.LEFT) {
      this.position.x *= -1;
      ctx.restore();
    }
  }

  checkWaypointArrival() {
    if (checkCircleCollision(this.position, this.destination, 5, 10)) {
      this.setDestination(this.waypoints[(this.waypointIndex += 1)]);
    }
  }

  checkEndpointArrival() {
    if (this.waypointIndex === this.waypoints.length) {
      // HUD.setLives();
      this.waypointIndex = 0;
      this.setPosition(this.waypoints[this.waypointIndex]);
      this.setDestination(this.waypoints[this.waypointIndex]);
    }
  }

  updateHealthBarPosition() {
    this.healthBar.setPosition({
      x: this.position.x,
      y: this.position.y - this.height,
    });
  }

  checkEnemyHealth() {
    // if(!this.health.isAlive() && !this.isEnemyDying()){
    // this.sprite.row = OBJECTS.STATES.DYING;
    // this.sprite.frame = 0;
    // this.center.y = this.position.y;
    // this.center.radius /= 4;
  }

  updatePriorityDistance() {
    // const yDistance = this.destination.y - this.position.y;
    // const xDistance = this.destination.x - this.position.x;
    // this.priorityDistance = Math.round(
    //   Math.abs(xDistance) + Math.abs(yDistance)
    // );
  }
}
