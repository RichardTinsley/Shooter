import { EnemyMovement } from "./EnemyMovement.js";
import { HealthBar } from "../../GUI/components/HealthBar.js";
import {
  drawEntityShadow,
  drawMouseOverEnemy,
} from "../../utilities/drawShapes.js";
import { ANIMATION } from "../../constants/animation.js";
import { SpriteFactory } from "../sprites/SpriteFactory.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";

export class EnemyDraw extends EnemyMovement {
  protected sprite = SpriteFactory.createZombieSprite1();
  protected healthBar!: HealthBar;
  protected hitDetection!: HitDetectionCircle;

  protected healthbarOffsetY = this.sprite.getScaledHeight();
  protected halfWidth = this.sprite.getScaledWidth() / 2;

  protected enemyState = ANIMATION.NORMAL;

  constructor() {
    super();
    this.setDimension();
  }

  setDimension(): this {
    this.sprite.setPosition(this.position);

    this.healthBar = new HealthBar()
      .setPosition(this.position)
      .setWidth(this.halfWidth)
      .setDrawOffsets(this.healthbarOffsetY);

    this.hitDetection = new HitDetectionCircle()
      .setPosition(this.position)
      .setWidth(this.halfWidth);
    return this;
  }

  draw(ctx: CanvasRenderingContext2D) {
    switch (this.enemyState) {
      case ANIMATION.MOUSEOVER:
        drawMouseOverEnemy(ctx, this.position, this.halfWidth);
      case ANIMATION.NORMAL:
        drawEntityShadow(ctx, this.position, this.halfWidth);
        this.contextSave(ctx);
        this.sprite.draw(ctx);
        this.contextRestore(ctx);
        this.healthBar.draw(ctx);
        break;
      case ANIMATION.FINISHED:
        break;
    }
  }

  update() {
    this.movement.move(this.position, this.destination);
    this.checkWaypointArrival(this.setComponentPositions);
    this.sprite.animate();
  }

  setComponentPositions = () => {
    this.sprite.setPosition(this.position);
    this.hitDetection.setPosition(this.position);
    this.healthBar.setPosition(this.position);
  };

  mouseOver(state: number) {
    this.enemyState = state;
    return;
  }
}
