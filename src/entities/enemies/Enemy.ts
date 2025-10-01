import { Position } from "../../constants/types.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { Mouse, STYLES } from "../../handlers/Mouse.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { HealthBar } from "./components/HealthBar.js";
import { MouseOverEnemy } from "./components/MouseOverEnemy.js";
import { Movement } from "./components/Movement.js";
import { Moving } from "./states/Moving.js";

export interface IEnemyState {
  enemy: Enemy;
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class Enemy {
  public state!: IEnemyState;
  public movement = new Movement();
  public position = this.movement.getWaypoints();
  public destination = this.movement.getWaypoints();
  public sprite = new SpriteAnimation().setPosition(this.position);
  public healthBar = new HealthBar().setPosition(this.position);
  public hitDetection = new HitDetectionCircle().setPosition(this.position);
  public mouseOverEnemy = new MouseOverEnemy().setPosition(this.position);
  public shadowWidth!: number;

  constructor(public enemy: any) {
    this.sprite
      .setImage(enemy.normal.move, enemy.width, enemy.height)
      .setScale(enemy.scale)
      .setDrawOffsets(enemy.drawOffsets.x, enemy.drawOffsets.y)
      .initialise();

    this.movement.setSpeed(enemy.speed);

    this.healthBar
      .setWidth(this.sprite.getWidth() / enemy.widthDivisor)
      .setDrawOffsets(this.sprite.getHeight());

    this.hitDetection
      .setWidth(this.sprite.getWidth() / enemy.widthDivisor)
      .setDrawOffsets(this.sprite.getHeight() / enemy.hitboxHeightDivisor);

    this.mouseOverEnemy.setWidth(this.sprite.getWidth() * 1.25);
    this.shadowWidth = this.sprite.getWidth() / enemy.widthDivisor;

    this.setMovingState();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.draw(ctx);
  }

  update(): void {
    this.state.update();
    Mouse.mouseOver(this, STYLES.ENEMY);
  }

  setPosition(position: Position) {
    this.position = { ...position };
  }

  setDestination(destination: Position) {
    this.destination = { ...destination };
  }

  public setMovingState = () => (this.state = new Moving(this));

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
