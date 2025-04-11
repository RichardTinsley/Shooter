import { ALL_ASSETS } from "../constants/assets.js";
import { Position } from "../constants/types.js";
import { IDrawable } from "../interfaces/IEntity.js";

export class Sprite implements IDrawable {
  protected image!: HTMLImageElement;

  protected width: number = this.spriteWidth;
  protected height: number = this.spriteHeight;
  protected halfWidth = this.width / 2;

  protected drawPositionX: number = this.position.x - this.halfWidth;
  protected drawPositionY: number = this.position.y - this.height;

  protected drawPositionOffsetX: number = 0;
  protected drawPositionOffsetY: number = 0;

  protected animationFrame = 0;
  protected animationRow = 0;

  constructor(
    public position: Position,
    fileName: string,
    protected spriteWidth: number,
    protected spriteHeight: number,
    protected scale: number
  ) {
    this.setScale(scale);
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
  }

  update(): void {}

  setImage(fileName: String): this {
    this.image = ALL_ASSETS.get(fileName);
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
}
