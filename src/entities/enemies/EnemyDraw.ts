import { EnemyMovement } from "./EnemyMovement.js";
import { HealthBar } from "../../GUI/components/HealthBar.js";
import { CircleHitDetection } from "../../handlers/CircleHitDetection.js";
import {
  drawEntityShadow,
  drawMouseOverEnemy,
} from "../../utilities/drawShapes.js";
import { ANIMATION } from "../../constants/animation.js";
import { SpriteFactory } from "../SpriteFactory.js";

export class EnemyDraw extends EnemyMovement {
  protected sprite = SpriteFactory.createZombieSprite1();
  protected healthBar!: HealthBar;
  protected hitDetection!: CircleHitDetection;

  protected spriteOffsetX = this.sprite.getScaledWidth() / 4;
  protected spriteOffsetY = 1;
  protected healthbarOffsetY = this.sprite.getScaledHeight();
  protected halfWidth = this.sprite.getScaledWidth() / 2;

  protected enemyState = ANIMATION.NORMAL;

  constructor() {
    super();
    this.setDimension(1);
  }

  setDimension(scale: number): this {
    this.sprite
      .setPosition(this.position)
      .setDrawOffsets(this.spriteOffsetX, this.spriteOffsetY);

    this.healthBar = new HealthBar()
      .setPosition(this.position)
      .setWidth(this.halfWidth)
      .setDrawOffsets(this.healthbarOffsetY);

    this.hitDetection = new CircleHitDetection()
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
    super.update();
    this.sprite.update();
  }

  mouseOver(state: number) {
    this.enemyState = state;
    return;
  }
}
