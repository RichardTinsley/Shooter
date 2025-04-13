import { ALL_ASSETS } from "../constants/assets.js";
import { Position } from "../constants/types.js";

export class Sprite {
  protected image!: HTMLImageElement;
  protected position!: Position;

  protected width: number = this.spriteWidth;
  protected height: number = this.spriteHeight;
  protected halfWidth = this.width / 2;

  protected drawOffsetX: number = 0;
  protected drawOffsetY: number = 0;

  protected animationFrame = 0;
  protected animationRow = 0;

  constructor(
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
      this.position.x - this.halfWidth + this.drawOffsetX,
      this.position.y - this.height + this.drawOffsetY,
      this.width,
      this.height
    );
  }

  setImage(fileName: String): this {
    this.image = ALL_ASSETS.get(fileName);
    return this;
  }

  setPosition(position: Position): this {
    this.position = position;
    return this;
  }

  getPosition(): Position {
    return this.position;
  }

  setSpriteDrawOffsets(offsetX: number, offsetY: number): this {
    this.drawOffsetX = offsetX;
    this.drawOffsetY = offsetY;
    return this;
  }
}
