import { Position } from "../../constants/types.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { Mouse, STYLES } from "../../handlers/Mouse.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { HealthBar } from "./components/HealthBar.js";
import { MouseOverEnemy } from "./components/MouseOverEnemy.js";
import { Movement } from "./components/Movement.js";
import { Walking } from "./states/Walking.js";

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

  initialiseSprite(
    walkingSprite: string,
    spriteWidth: number,
    spriteHeight: number,
    spriteScale: number
  ): this {
    this.sprite
      .setImage(walkingSprite, spriteWidth, spriteHeight)
      .setScale(spriteScale)
      .initialise();
    return this;
  }

  initialiseMovement(movementSpeed: number): this {
    this.movement.setSpeed(movementSpeed);
    return this;
  }

  initialiseComponents(width: number, height: number): this {
    this.healthBar.setWidth(width).setDrawOffsets(height);
    this.hitDetection.setWidth(width).setDrawOffsets(height / 2);
    this.mouseOverEnemy.setWidth(width * 1.25);
    this.shadowWidth = width;
    return this;
  }

  setPosition(position: Position) {
    this.position = { ...position };
  }

  setDestination(destination: Position) {
    this.destination = { ...destination };
  }


  draw(ctx: CanvasRenderingContext2D): void {
    this.state.draw(ctx);
  }

  update(): void {
    this.state.update();
    Mouse.mouseOver(this, STYLES.ENEMY);
  }

  public walkingState = () => (this.state = new Walking(this));

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
