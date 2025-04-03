import { ALL_ASSETS } from "../constants/assets.js";
import { Cursor, HitCircle, Position } from "../constants/types.js";
import { IDrawable } from "../interfaces/IEntity.js";
import { checkCircleCollision } from "../utilities/collisionDetection.js";
import {
  drawCircleHitbox,
  drawDot,
  drawMouseOverEntity,
} from "../utilities/drawShapes.js";

export class Sprite implements IDrawable {
  protected image!: HTMLImageElement;

  protected scale: number = 1;
  protected width: number = this.spriteWidth;
  protected height: number = this.spriteHeight;
  protected halfWidth = this.width / 2;

  protected drawPositionX: number = this.position.x - this.halfWidth;
  protected drawPositionY: number = this.position.y - this.height;

  //OFFSETS FOR DIFFERENT ENEMIES AND TOWERS
  protected drawOffsetY: number = 0;
  protected hitCircleOffsetX: number = 0;

  protected hitCircle: HitCircle = {
    x: this.position.x,
    y: this.position.y - this.height / 2,
    radius: this.halfWidth,
  };

  protected animationFrame = 0;
  protected animationRow = 0;

  constructor(
    public position: Position,
    fileName: string,
    protected spriteWidth: number,
    protected spriteHeight: number
  ) {
    this.image = ALL_ASSETS.get(fileName);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      this.spriteWidth * this.animationFrame,
      this.spriteHeight * this.animationRow,
      this.spriteWidth,
      this.spriteHeight,
      this.drawPositionX,
      this.drawPositionY,
      this.width,
      this.height
    );

    drawMouseOverEntity(ctx, this.position, this.width);
  }

  update(): void {}

  setImage(fileName: String): this {
    ALL_ASSETS.get(fileName);
    return this;
  }

  setPosition(position: Position): this {
    this.position = { ...position };
    return this;
  }

  getPosition(): Position {
    return this.position;
  }

  setScale(scale: number): this {
    this.scale = scale;
    this.width = Math.round(this.spriteWidth * this.scale * 100) / 100;
    this.height = Math.round(this.spriteHeight * this.scale * 100) / 100;
    this.halfWidth = this.width / 2;
    return this;
  }

  checkCollision(cursor: Cursor): boolean {
    return checkCircleCollision(
      cursor,
      this.hitCircle,
      cursor.radius,
      this.hitCircle.radius
    );
  }

  drawHitbox(ctx: CanvasRenderingContext2D) {
    drawCircleHitbox(ctx, this.hitCircle, drawDot);
  }

  mouseOver(state: number) {
    return;
  }
}
