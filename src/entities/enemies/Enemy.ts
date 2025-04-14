import { EnemyMovement } from "./EnemyMovement.js";
import { HealthBar } from "../../GUI/components/HealthBar.js";
import {
  drawEntityShadow,
  drawMouseOverEnemy,
} from "../../utilities/drawShapes.js";
import { ANIMATION } from "../../constants/animation.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";

export class Enemy extends EnemyMovement {
  protected sprite!: SpriteAnimation;
  protected healthBar!: HealthBar;
  protected hitDetection!: HitDetectionCircle;

  protected shadowWidth!: number;
  protected mouseOverWidth!: number;

  protected enemyState = ANIMATION.NORMAL;

  constructor() {
    super();
  }

  initialiseEnemy(): this {
    this.sprite.setPosition(this.position);

    this.shadowWidth = this.sprite.getScaledWidth();
    this.mouseOverWidth = this.sprite.getScaledWidth();

    this.healthBar = new HealthBar()
      .setPosition(this.position)
      .setWidth(this.sprite.getScaledWidth())
      .setDrawOffsets(this.sprite.getScaledHeight() + 2);

    this.hitDetection = new HitDetectionCircle()
      .setPosition(this.position)
      .setDrawOffsets(0, this.sprite.getScaledHeight() / 2)
      .setWidth(this.sprite.getScaledWidth());

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
