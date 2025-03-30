import { Position } from "../constants/types.js";
import { IMovingSprite } from "../interfaces/IEntity.js";
import { giveAngle, giveDirection } from "../utilities/math.js";
import { Sprite } from "./Sprite.js";

const enum SPRITE_DIRECTIONS {
  LEFT = -1,
  RIGHT = 1,
}

export class MovingSprite extends Sprite implements IMovingSprite {
  protected destination!: Position;
  protected speed: number = 1;
  protected angle!: number;
  protected direction!: number;

  constructor(fileName: string, spriteWidth: number, spriteHeight: number) {
    super(fileName, spriteWidth, spriteHeight);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.contextSave(ctx);
    super.draw(ctx);
    this.contextRestore(ctx);
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
    this.direction = giveDirection(this.angle);
    this.position.x += Math.cos(this.angle) * this.speed;
    this.position.y += Math.sin(this.angle) * this.speed;
  }

  contextSave(ctx: CanvasRenderingContext2D) {
    if (this.direction === SPRITE_DIRECTIONS.LEFT) {
      ctx.save();
      ctx.scale(this.direction, 1);
      this.position.x *= -1;
    }
  }

  contextRestore(ctx: CanvasRenderingContext2D) {
    if (this.direction === SPRITE_DIRECTIONS.LEFT) {
      this.position.x *= -1;
      ctx.restore();
    }
  }
}
