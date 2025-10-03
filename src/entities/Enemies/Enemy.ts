import { Position } from "../../constants/types.js";
import { Sprites } from "../../types/Sprites.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { Mouse, STYLES } from "../../handlers/Mouse.js";
import { SpriteAnimation } from "../components/SpriteAnimation.js";
import { MouseOverEnemy } from "../components/MouseOverEnemy.js";
import { Movement } from "../components/Movement.js";
import { Moving } from "./states/Moving.js";
import { HealthBar } from "../components/HealthBar.js";

export interface IEnemyState {
  enemy: Enemy;
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class Enemy {
  public state!: IEnemyState;

  public width!: number;
  public height!: number;
  public scale!: number;
  public speed!: number;
  public drawOffsets!: Position;
  public widthDivisor!: number;
  public hitboxHeight!: number;
  public healthBarHeight!: number;
  public shadowWidth!: number;

  public movement = new Movement();
  public position = this.movement.getWaypoints();
  public destination = this.movement.getWaypoints();

  public sprite = new SpriteAnimation();
  public healthBar = new HealthBar();
  public hitDetection = new HitDetectionCircle();
  public mouseOverEnemy = new MouseOverEnemy();

  constructor(public sprites: Sprites) {}

  initialiseComponents() {
    this.movement.setSpeed(this.speed);

    this.sprite
      .setPosition(this.position)
      .setImage(this.sprites.move, this.width, this.height)
      .setScale(this.scale)
      .setDrawOffsets(this.drawOffsets.x, this.drawOffsets.y)
      .initialise();

    this.healthBar
      .setPosition(this.position)
      .setWidth(this.sprite.getWidth() / this.widthDivisor)
      .setDrawOffsets(this.sprite.getHeight() * this.healthBarHeight);

    this.hitDetection
      .setPosition(this.position)
      .setWidth(this.sprite.getWidth() / this.widthDivisor)
      .setDrawOffsets(this.sprite.getHeight() * this.hitboxHeight);

    this.mouseOverEnemy
      .setPosition(this.position)
      .setWidth(this.sprite.getWidth() / this.widthDivisor);

    this.shadowWidth = this.sprite.getWidth() / this.widthDivisor;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.draw(ctx);
  }

  update(): void {
    this.state.update();
    Mouse.mouseOver(this, STYLES.ENEMY);
  }

  setPosition = (position: Position) => (this.position = { ...position });

  setDestination = (destination: Position) => (this.destination = { ...destination });

  setMovingState = () => (this.state = new Moving(this));

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
