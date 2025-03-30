import { Position } from "../constants/types.js";
import { IMovingSprite } from "../interfaces/IEntity.js";
import { giveAngle } from "../utilities/math.js";
import { Sprite } from "./Sprite.js";

export class MovingSprite extends Sprite implements IMovingSprite {
  private destination!: Position;
  private speed: number = 1;
  private angle!: number;

  constructor(fileName: string, spriteWidth: number, spriteHeight: number) {
    super(fileName, spriteWidth, spriteHeight);
  }

  draw(ctx: CanvasRenderingContext2D) {
    super.draw(ctx);
  }

  update() {
    super.update();
    this.updateMovement();
  }

  setSpeed(speed: number): this {
    this.speed = speed;
    return this;
  }

  setDestination(x: number, y: number): this {
    this.destination = { x: x, y: y };
    return this;
  }

  updateMovement() {
    this.angle = giveAngle(this.destination, this.position);
    this.position.x += Math.cos(this.angle) * this.speed;
    this.position.y += Math.sin(this.angle) * this.speed;
  }
}
