import { Position } from "../constants/types.js";
import { IMovingSprite } from "../interfaces/IEntity.js";
import {
  giveAngle,
  giveDirection,
  DIRECTION,
  randomFloat,
} from "../utilities/math.js";
import { AnimatedSprite } from "./AnimatedSprite.js";

export class MovingSprite extends AnimatedSprite implements IMovingSprite {
  protected destination!: Position;
  protected speed: number = 1;
  protected angle!: number;
  protected direction!: number;

  constructor(fileName: string, spriteWidth: number, spriteHeight: number) {
    super(fileName, spriteWidth, spriteHeight);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.updateSpriteDrawPosition();
    super.draw(ctx);
  }

  update(event: { update: boolean; delta: number }) {
    super.update(event);
    this.updateMovement(event);
  }

  setSpeed(speed: number): this {
    this.speed = randomFloat(speed - speed * 0.1, speed + speed * 0.1);
    return this;
  }

  setDestination(position: Position): this {
    this.destination = { ...position };
    return this;
  }

  updateMovement(event: { update: boolean; delta: number }) {
    this.angle = giveAngle(this.destination, this.position);
    this.direction = giveDirection(this.angle);

    this.position.x += Math.cos(this.angle) * (this.speed * event.delta);
    this.position.y += Math.sin(this.angle) * (this.speed * event.delta);
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
