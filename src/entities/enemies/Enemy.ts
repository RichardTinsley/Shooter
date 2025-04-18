import { HealthBar } from "../../GUI/components/HealthBar.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { drawShadow, drawMouseOverEnemy } from "../../utilities/drawShapes.js";
import { EnemyWaves } from "../../handlers/EnemyWaves.js";
import { Position } from "../../constants/types.js";
import { ANIMATION } from "../../constants/animation.js";
import { EnemyMovement } from "./EnemyMovement.js";

export class Enemy {
  protected movement = new EnemyMovement();
  protected position: Position = this.movement.getPosition();
  protected sprite!: SpriteAnimation;
  protected healthBar!: HealthBar;
  protected hitDetection!: HitDetectionCircle;

  protected shadowWidth!: number;
  protected mouseOverWidth!: number;

  protected enemyState = ANIMATION.NORMAL;

  draw(ctx: CanvasRenderingContext2D) {
    switch (this.enemyState) {
      case ANIMATION.MOUSEOVER:
        drawMouseOverEnemy(ctx, this.position, this.mouseOverWidth);
      case ANIMATION.NORMAL:
        drawShadow(ctx, this.position, this.shadowWidth);
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
    this.movement.update();
    this.position = this.movement.getPosition();
    this.sprite.animate();
  }

  initialiseEnemy(): this {
    this.shadowWidth = this.sprite.getScaledWidth();
    this.mouseOverWidth = this.sprite.getScaledWidth() * 1.25;

    this.healthBar = new HealthBar()
      .setPosition(this.position)
      .setWidth(this.sprite.getScaledWidth())
      .setDrawOffsets(this.sprite.getScaledHeight());

    this.hitDetection = new HitDetectionCircle()
      .setPosition(this.position)
      .setWidth(this.sprite.getScaledWidth())
      .setDrawOffsets(0, this.sprite.getScaledHeight() / 2);
    return this;
  }

  contextSave(ctx: CanvasRenderingContext2D) {
    if (this.movement.getDirection() === -1) {
      ctx.save();
      ctx.scale(-1, 1);
      this.position.x *= -1;
    }
  }

  contextRestore(ctx: CanvasRenderingContext2D) {
    if (this.movement.getDirection() === -1) {
      this.position.x *= -1;
      ctx.restore();
    }
  }

  mouseOver(state: number) {
    this.enemyState = state;
    return;
  }

  setDamage(damage: number) {
    this.healthBar.setDamage(damage);
    if (this.healthBar.getCurrentStatus() === 0) {
      EnemyWaves.enemyKilled();
    }
    //this.enemyState === dying
  }

  setSpeed(speed: number): this {
    this.movement.setSpeed(speed);
    return this;
  }

  getType(): string {
    return "Enemy";
  }

  mouseClick() {
    // if(Mouse.selectedEnemy !== this.mouseOverItem) handle this logic in entity.mouseclick()
    //   Mouse.selectedEnemy.mouseClick("NOLONGERSELECTED")
    //   Mouse.selectedEnemy = this.mouseOverItem
    // same swap logic in tower
    return;
  }
}

// export interface IEnemyState {
//   enemy: Enemy;
//   draw(ctx: CanvasRenderingContext2D): void;
//   update(): void;
// }

// export class Enemy {
//   public currentState: IEnemyState = new EnemyMoving(this);

//   protected position!: Position;
//   protected sprite!: SpriteAnimation;
//   protected healthBar!: HealthBar;
//   protected hitDetection!: HitDetectionCircle;

//   protected shadowWidth!: number;
//   protected mouseOverWidth!: number;

//   getType(): string {
//     return "Enemy";
//   }

//   public getCurrentState(): IEnemyState {
//     return this.currentState;
//   }

//   public switchToDyingState = () =>
//     (this.currentState = new EnemyDying(this));

// }
