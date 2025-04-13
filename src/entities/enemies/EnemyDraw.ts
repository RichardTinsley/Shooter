import { EnemyMovement } from "./EnemyMovement.js";
import { HealthBar } from "../../GUI/components/HealthBar.js";
import { CircleHitDetection } from "../CircleHitDetection.js";
import {
  drawEntityShadow,
  drawMouseOverEnemy,
} from "../../utilities/drawShapes.js";
import { ANIMATION } from "../../constants/animation.js";
import { SpriteAnimation } from "../SpriteAnimation.js";
import { FILE_NAMES } from "../../constants/assets.js";

export class EnemyDraw extends EnemyMovement {
  protected width: number = 64;
  protected height: number = 32;
  protected halfWidth = this.width / 2;

  protected spriteOffsetX = this.width / 4;
  protected spriteOffsetY = this.height / 5;

  protected shadowWidth = this.halfWidth;
  protected mouseOverWidth = this.halfWidth;

  protected enemyState = ANIMATION.NORMAL;

  protected sprite!: SpriteAnimation;
  protected healthBar!: HealthBar;
  protected hitDetection!: CircleHitDetection;

  constructor() {
    super();
    this.setDimension(1);
  }

  setDimension(scale: number): this {
    // this.width = Math.round(this.spriteWidth * scale * 100) / 100;
    // this.height = Math.round(this.spriteHeight * scale * 100) / 100;
    // this.halfWidth = this.width / 2;

    this.sprite = new SpriteAnimation(
      FILE_NAMES.ENEMY_ZOMBIE_1_WALK,
      this.width,
      this.height
    )
      .setPosition(this.position)
      .setSpriteDrawOffsets(this.spriteOffsetX, this.spriteOffsetY);

    this.healthBar = new HealthBar()
      .setPosition(this.position)
      .setWidth(this.halfWidth);

    this.hitDetection = new CircleHitDetection()
      .setPosition(this.position)
      .setWidth(this.halfWidth);
    return this;
  }

  draw(ctx: CanvasRenderingContext2D) {
    switch (this.enemyState) {
      case ANIMATION.MOUSEOVER:
        drawMouseOverEnemy(ctx, this.position, this.mouseOverWidth);
      case ANIMATION.NORMAL:
        drawEntityShadow(ctx, this.position, this.shadowWidth);
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
    this.hitDetection.setPosition(this.position); // REMOVE THIS BY POINTING TO ENEMYMOVEMENT POSITION
    this.healthBar.setPosition(this.position); // REMOVE THIS BY POINTING TO ENEMYMOVEMENT POSITION
  }

  mouseOver(state: number) {
    this.enemyState = state;
    return;
  }
}
