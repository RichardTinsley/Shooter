import { Position } from "../constants/types.js";
import { HitDetectionCircle } from "../handlers/HitDetectionCircle.js";
import { Mouse, STYLES } from "../handlers/Mouse.js";
import { SpriteAnimation } from "./components/SpriteAnimation.js";
import { MouseOverEnemy } from "./components/MouseOverEnemy.js";
import { Movement } from "./components/Movement.js";
import { Moving } from "./states/Moving.js";
import { HealthBar } from "./components/HealthBar.js";

export interface IEnemyState {
  enemy: Enemy;
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class Enemy {
  public state!: IEnemyState;
  public movement = new Movement().setSpeed(this.enemy.speed);
  public position = this.movement.getWaypoints();
  public destination = this.movement.getWaypoints();

  public sprite = new SpriteAnimation()
    .setPosition(this.position)
    .setImage(this.enemy.normal.move, this.enemy.width, this.enemy.height)
    .setScale(this.enemy.scale)
    .setDrawOffsets(this.enemy.drawOffsets.x, this.enemy.drawOffsets.y)
    .initialise();

  public healthBar = new HealthBar()
    .setPosition(this.position)
    .setWidth(this.sprite.getWidth() / this.enemy.widthDivisor)
    .setDrawOffsets(this.sprite.getHeight() * this.enemy.healthBarHeight);

  public hitDetection = new HitDetectionCircle()
    .setPosition(this.position)
    .setWidth(this.sprite.getWidth() / this.enemy.widthDivisor)
    .setDrawOffsets(this.sprite.getHeight() * this.enemy.hitboxHeight);

  public mouseOverEnemy = new MouseOverEnemy()
    .setPosition(this.position)
    .setWidth(this.sprite.getWidth() / this.enemy.widthDivisor);

  public shadowWidth = this.sprite.getWidth() / this.enemy.widthDivisor;

  constructor(public enemy: any) {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.draw(ctx);
  }

  update(): void {
    this.state.update();
    Mouse.mouseOver(this, STYLES.ENEMY);
  }

  setPosition = (position: Position) => (this.position = { ...position });
  setDestination = (destination: Position) => (this.destination = { ...destination });

  setMovingState = (): this => {
    this.state = new Moving(this);
    return this;
  };

  mouseClick(): void {
    if (Mouse.selectedEnemy === this)
      if (Mouse.selectedEnemy) {
        // CHANGE STATE BACK Mouse.selectedEnemy
      }

    Mouse.selectedEnemy = this;
  }

  setState(state: number) {
    this.mouseOverEnemy.setState(state);
  }
}
