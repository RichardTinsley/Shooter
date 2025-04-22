import { Position } from "../../constants/types.js";
import { HealthBar } from "../../GUI/components/HealthBar.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { EnemyMovement } from "./EnemyMovement.js";
import { EnemyWalking } from "./enemyStates/EnemyWalking.js";

export interface IEnemyState {
  enemy: Enemy;
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class Enemy {
  public state!: IEnemyState;

  public sprite!: SpriteAnimation;
  public healthBar!: HealthBar;
  public hitDetection!: HitDetectionCircle;
  public movement!: EnemyMovement;

  public position!: Position;
  public destination!: Position;
  public speed!: number;

  public shadowWidth!: number;
  public mouseOverWidth!: number;

  public getCurrentState(): IEnemyState {
    return this.state;
  }

  // public switchToDyingState = () => (this.state = new EnemyDying(this));
  public switchToWalkingState = () => (this.state = new EnemyWalking(this));

  initialiseEnemy(fileName: string, width: number, height: number): this {
    this.movement = new EnemyMovement();
    this.position = this.movement.getWaypoints();
    this.destination = this.movement.getWaypoints();

    this.sprite = new SpriteAnimation(fileName, width, height)
      .setPosition(this.position)
      .setScale(1.5);

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

  setPosition(position: Position): this {
    this.position = { ...position };
    return this;
  }

  setDestination(destination: Position): this {
    this.destination = { ...destination };
    return this;
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
