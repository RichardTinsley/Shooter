import { Position } from "../constants/types.js";
import { Time } from "../handlers/Time.js";
import { IMovingSprite } from "../interfaces/IEntity.js";
import {
  DIRECTION,
  giveAngle,
  giveDirection,
  randomFloat,
} from "../utilities/math.js";
import { AnimatedSprite } from "./AnimatedSprite.js";

export class MovingSprite extends AnimatedSprite implements IMovingSprite {
  protected destination!: Position;
  protected speed: number = 1;
  protected angle!: number;
  protected direction!: number;

  constructor(
    position: Position,
    fileName: string,
    spriteWidth: number,
    spriteHeight: number,
    scale: number
  ) {
    super(position, fileName, spriteWidth, spriteHeight, scale);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.contextSave(ctx);
    this.updateSpriteDrawPosition();
    super.draw(ctx);
    this.contextRestore(ctx);
  }

  update() {
    super.update();
    this.updateMovement();
  }

  updateMovement() {
    this.angle = giveAngle(this.destination, this.position);
    this.direction = giveDirection(this.angle);

    this.position.x +=
      Math.cos(this.angle) * this.speed * Time.deltaTimeMultiplier;
    this.position.y +=
      Math.sin(this.angle) * this.speed * Time.deltaTimeMultiplier;
  }

  updateSpriteDrawPosition() {
    this.drawPositionX =
      this.position.x - this.halfWidth + this.drawPositionOffsetX;
    this.drawPositionY =
      this.position.y - this.height - this.drawPositionOffsetY;
  }

  setSpeed(speed: number): this {
    this.speed = randomFloat(speed - speed * 0.2, speed + speed * 0.2);
    return this;
  }

  setDestination(position: Position): this {
    this.destination = { ...position };
    return this;
  }

  contextSave(ctx: CanvasRenderingContext2D) {
    if (this.direction === DIRECTION.LEFT) {
      ctx.save();
      ctx.scale(this.direction, 1);
      this.position.x *= -1;
    }
  }

  contextRestore(ctx: CanvasRenderingContext2D) {
    if (this.direction === DIRECTION.LEFT) {
      this.position.x *= -1;
      ctx.restore();
    }
  }
}
