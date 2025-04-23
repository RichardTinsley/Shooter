import { Position } from "../../constants/types.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { HealthBar } from "./components/HealthBar.js";
import { Movement } from "./components/Movement.js";
import { Walking } from "./states/Walking.js";

export interface IEnemyState {
  enemy: Enemy;
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class Enemy {
  public state!: IEnemyState;

  public walkingSprite!: string;
  public screamingSprite!: string;
  public dyingSprite!: string;
  public idlingSprite!: string;

  public sprite!: SpriteAnimation;
  public spriteWidth!: number;
  public spriteHeight!: number;
  public spriteScale!: number;

  public movement = new Movement();
  public movementSpeed!: number;
  public position = this.movement.getWaypoints();
  public destination = this.movement.getWaypoints();

  public healthBar = new HealthBar().setPosition(this.position);
  public hitDetection = new HitDetectionCircle().setPosition(this.position);
  public shadowWidth!: number;
  public mouseOverWidth!: number;

  public getCurrentState(): IEnemyState {
    return this.state;
  }

  // public switchToDyingState = () => (this.state = new EnemyDying(this));
  public switchToWalkingState = () => (this.state = new Walking(this));

  initialiseEnemy() {
    this.healthBar
      .setWidth(this.sprite.getScaledWidth())
      .setDrawOffsets(this.sprite.getScaledHeight());

    this.hitDetection
      .setWidth(this.sprite.getScaledWidth())
      .setDrawOffsets(0, this.sprite.getScaledHeight() / 2);

    this.shadowWidth = this.sprite.getScaledWidth();
    this.mouseOverWidth = this.sprite.getScaledWidth() * 1.25;
  }

  setSprite(sprite: string) {
    this.sprite = new SpriteAnimation(
      sprite,
      this.spriteWidth,
      this.spriteHeight
    )
      .setPosition(this.position)
      .setScale(this.spriteScale);
  }

  setPosition(position: Position) {
    this.position = { ...position };
  }

  setDestination(destination: Position) {
    this.destination = { ...destination };
  }

  mouseClick() {
    // if(Mouse.selectedEnemy !== this.mouseOverItem)
    //   Mouse.selectedEnemy.mouseClick("NOLONGERSELECTED")
    //   Mouse.selectedEnemy = this.mouseOverItem
    return;
  }

  mouseOver(state: number) {
    // this.enemyState = state;
    return;
  }

  getType(): string {
    return "Enemy";
  }
}
