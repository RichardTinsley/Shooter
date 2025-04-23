import { ALL_ASSETS } from "../../constants/assets.js";
import { Position } from "../../constants/types.js";

export class Sprite {
  protected image!: HTMLImageElement;
  protected spriteWidth!: number;
  protected spriteHeight!: number;
  protected position!: Position;
  protected direction!: number;

  protected scaledWidth: number = this.spriteWidth;
  protected scaledHeight: number = this.spriteHeight;
  protected halfWidth: number = this.spriteWidth / 2;

  protected drawOffsetX: number = 0;
  protected drawOffsetY: number = 0;

  protected currentFrame: number = 0;
  protected currentRow: number = 0;

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.scale(this.direction, 1);

    ctx.drawImage(
      this.image,
      this.spriteWidth * this.currentFrame,
      this.spriteHeight * this.currentRow,
      this.spriteWidth,
      this.spriteHeight,
      0 - this.halfWidth + this.drawOffsetX,
      0 - this.scaledHeight + this.drawOffsetY,
      this.scaledWidth,
      this.scaledHeight
    );

    ctx.restore();
  }

  setImage(fileName: string, width: number, height: number): this {
    this.image = ALL_ASSETS.get(fileName);
    this.spriteWidth = width;
    this.spriteHeight = height;
    return this;
  }

  setPosition(position: Position): this {
    this.position = position;
    return this;
  }

  getPosition(): Position {
    return this.position;
  }

  setDirection(direction: number) {
    this.direction = direction;
  }

  setDrawOffsets(offsetX: number, offsetY: number): this {
    this.drawOffsetX = offsetX * this.getScaledWidth();
    this.drawOffsetY = offsetY * this.getScaledHeight();
    return this;
  }

  setScale(scale: number): this {
    this.scaledWidth = Math.round(this.spriteWidth * scale * 100) / 100;
    this.scaledHeight = Math.round(this.spriteHeight * scale * 100) / 100;
    this.halfWidth = this.scaledWidth / 2;
    return this;
  }

  getScaledWidth(): number {
    return this.scaledWidth;
  }

  getScaledHeight(): number {
    return this.scaledHeight;
  }

  getWidth(): number {
    return this.spriteWidth;
  }
}
