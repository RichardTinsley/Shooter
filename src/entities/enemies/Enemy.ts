import { Position } from "../../constants/types.js";
import { HealthBar } from "../../GUI/components/HealthBar.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import {
  drawEntityShadow,
  drawMouseOverEnemy,
} from "../../utilities/drawShapes.js";
import { MovingSprite } from "../MovingSprite.js";
import { HUD } from "../../handlers/HUD.js";
import { CircleHitDetection } from "../CircleHitDetection.js";
import { ANIMATION } from "../../constants/animation.js";

export class Enemy extends MovingSprite {
  protected healthBar = new HealthBar()
    .setPosition(this.position)
    .setWidth(this.width);
  protected hitDetection = new CircleHitDetection().setHitCircle(
    this.position,
    this.width
  );

  protected waypointIndex = 0;
  protected priorityDistance = 0;
  protected enemyState = ANIMATION.ANIMATING;

  constructor(
    position: Position,
    fileName: string,
    spriteWidth: number,
    spriteHeight: number,
    scale: number,
    protected waypoints: Array<Position>
  ) {
    super(position, fileName, spriteWidth, spriteHeight, scale);
    this.destination = { ...position };
    this.drawPositionOffsetY = 50;
    this.drawPositionOffsetX = this.width / 4;
  }

  draw(ctx: CanvasRenderingContext2D) {
    switch (this.enemyState) {
      case ANIMATION.MOUSEOVER:
        drawMouseOverEnemy(ctx, this.position, this.width);
      case ANIMATION.NORMAL:
        drawEntityShadow(ctx, this.position, this.width);
        super.draw(ctx);
        this.healthBar.draw(ctx);
        break;
      case ANIMATION.FINISHED:
        break;
    }
  }

  update() {
    super.update();

    this.checkWaypointArrival();

    this.healthBar.setPosition({
      x: this.position.x,
      y: this.position.y - this.height - this.drawPositionOffsetY,
    });

    this.hitDetection.setHitCircle(
      {
        x: this.position.x,
        y: this.position.y - this.height / 2 - this.drawPositionOffsetY,
      },
      this.width
    );
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

  checkEnemyHealth() {
    // if(!this.health.isAlive() && !this.isEnemyDying()){
    // this.sprite.row = OBJECTS.STATES.DYING;
    // this.sprite.frame = 0;
    // this.center.y = this.position.y;
    // this.center.radius /= 4;
  }

  updatePriorityDistance() {
    const yDistance = this.destination.y - this.position.y;
    const xDistance = this.destination.x - this.position.x;
    this.priorityDistance = Math.round(
      Math.abs(xDistance) + Math.abs(yDistance)
    );
  }

  mouseOver(state: number) {
    this.enemyState = state;
    return;
  }
}
