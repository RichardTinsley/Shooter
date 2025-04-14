import { ALL_ASSETS } from "../../constants/assets.js";
import { Position } from "../../constants/types.js";

export class Sprite {
  protected image!: HTMLImageElement;
  protected position!: Position;

  protected scaledWidth: number = this.width;
  protected scaledHeight: number = this.height;
  protected halfWidth: number = this.width / 2;

  protected drawOffsetX: number = 0;
  protected drawOffsetY: number = 0;

  protected animationFrame: number = 0;
  protected animationRow: number = 0;

  constructor(
    fileName: string,
    protected width: number,
    protected height: number
  ) {
    this.image = ALL_ASSETS.get(fileName);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      this.width * this.animationFrame,
      this.height * this.animationRow,
      this.width,
      this.height,
      this.position.x - this.halfWidth + this.drawOffsetX,
      this.position.y - this.height + this.drawOffsetY,
      this.scaledWidth,
      this.scaledHeight
    );
  }

  setPosition(position: Position): this {
    this.position = position;
    return this;
  }

  getPosition(): Position {
    return this.position;
  }

  setDrawOffsets(offsetX: number, offsetY: number): this {
    this.drawOffsetX = offsetX * this.getScaledWidth();
    this.drawOffsetY = offsetY * this.getScaledHeight();
    return this;
  }

  setScale(scale: number): this {
    this.scaledWidth = Math.round(this.width * scale * 100) / 100;
    this.scaledHeight = Math.round(this.height * scale * 100) / 100;
    this.halfWidth = this.scaledWidth / 2;
    return this;
  }

  getScaledWidth(): number {
    return this.scaledWidth;
  }

  getScaledHeight(): number {
    return this.scaledHeight;
  }
}
