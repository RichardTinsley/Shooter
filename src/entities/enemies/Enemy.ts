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

  public movement = new Movement();
  public position = this.movement.getWaypoints();
  public destination = this.movement.getWaypoints();

  public sprite = new SpriteAnimation().setPosition(this.position);
  public healthBar = new HealthBar().setPosition(this.position);
  public hitDetection = new HitDetectionCircle().setPosition(this.position);
  public shadowWidth!: number;
  public mouseOverWidth!: number;

  public getCurrentState = (): IEnemyState => this.state;

  // public switchToDyingState = () => (this.state = new EnemyDying(this));
  public switchToWalkingState = () => (this.state = new Walking(this));

  initialiseEnemyComponents(width: number, height: number) {
    this.healthBar.setWidth(width).setDrawOffsets(height);
    this.hitDetection.setWidth(width).setDrawOffsets(0, height / 2);
    this.shadowWidth = width;
    this.mouseOverWidth = width * 1.25;
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

  mouseOver() {
    //this.state = state;
    return;
  }

  getType(): string {
    return "Enemy";
  }
}
