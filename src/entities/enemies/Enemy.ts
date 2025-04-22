import { Position } from "../../constants/types.js";
import { HealthBar } from "../../GUI/components/HealthBar.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { EnemyMovementComponent } from "./EnemyMovementComponent.js";
import { EnemyWalkingState } from "./enemyStates/EnemyWalkingState.js";

export interface IEnemyState {
  enemy: Enemy;
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}

export class Enemy {
  public state!: IEnemyState;

  public walkingSprite!: string;
  public width!: number;
  public height!: number;
  public scale!: number;
  public speed!: number;

  public sprite!: SpriteAnimation;
  public movement = new EnemyMovementComponent();
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
  public switchToWalkingState = () =>
    (this.state = new EnemyWalkingState(this));

  initialiseEnemy(): this {
    this.healthBar
      .setWidth(this.sprite.getScaledWidth())
      .setDrawOffsets(this.sprite.getScaledHeight());

    this.hitDetection
      .setWidth(this.sprite.getScaledWidth())
      .setDrawOffsets(0, this.sprite.getScaledHeight() / 2);

    this.shadowWidth = this.sprite.getScaledWidth();
    this.mouseOverWidth = this.sprite.getScaledWidth() * 1.25;
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
