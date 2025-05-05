import { Position } from "../../../constants/types.js";
import { HitDetectionCircle } from "../../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../../sprites/SpriteAnimation.js";
import { HealthBar } from "./HealthBar.js";
import { Movement } from "./Movement.js";

export class EnemyComponents {
  public movement = new Movement();
  public position = this.movement.getWaypoints();
  public destination = this.movement.getWaypoints();
  public sprite = new SpriteAnimation().setPosition(this.position);
  public healthBar = new HealthBar().setPosition(this.position);
  public hitDetection = new HitDetectionCircle().setPosition(this.position);
  public shadowWidth!: number;
  public mouseOverWidth!: number;

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
    this.shadowWidth = width;
    this.mouseOverWidth = width * 1.25;
    return this;
  }

  setPosition(position: Position) {
    this.position = { ...position };
  }

  setDestination(destination: Position) {
    this.destination = { ...destination };
  }
}
