import { ALL_ASSETS } from "../constants/assets.js";
import { ISprite } from "../interfaces/IEntity.js";
import { Position } from "../constants/types.js";

const enum SPRITE_STATE {
  ANIMATE_FRAMES,
  ANIMATE_ROWS,
}

export class Sprite implements ISprite {
  protected image!: HTMLImageElement;

  protected scale: number = 1;
  protected width: number = this.spriteWidth;
  protected height: number = this.spriteHeight;

  protected halfWidth = this.width / 2;

  protected animationFrame = 0;
  protected animationRow = 0;
  protected maxAnimationFrame!: number;
  protected maxAnimationRow!: number;
  protected state!: number;

  position!: Position;
  protected drawPositionX!: number;
  protected drawPositionY!: number;

  constructor(
    fileName: string,
    protected spriteWidth: number,
    protected spriteHeight: number
  ) {
    this.image = ALL_ASSETS.get(fileName);

    this.maxAnimationFrame = this.getSpriteSheetDimensions(
      this.image.width,
      this.spriteWidth
    );

    this.maxAnimationRow = this.getSpriteSheetDimensions(
      this.image.height,
      this.spriteHeight
    );

    this.maxAnimationRow === 0
      ? (this.state = SPRITE_STATE.ANIMATE_FRAMES)
      : (this.state = SPRITE_STATE.ANIMATE_ROWS);
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

  update() {
    switch (this.state) {
      case SPRITE_STATE.ANIMATE_FRAMES:
        this.animateFrames();
        break;
      case SPRITE_STATE.ANIMATE_ROWS:
        this.animateRows();
        break;
    }
  }

  animateFrames(): void {
    if (this.animationFrame < this.maxAnimationFrame) {
      this.animationFrame++;
    } else {
      this.animationFrame = 0;
    }
  }

  animateRows() {
    if (this.animationFrame < this.maxAnimationFrame) {
      this.animationFrame++;
    } else {
      this.animationRow++;
      this.animationFrame = 0;
    }
    if (
      this.animationRow === this.maxAnimationRow &&
      this.animationFrame < this.maxAnimationFrame
    ) {
      this.animationRow = 0;
      this.animationFrame = 0;
    }
  }

  setPosition(x: number, y: number): this {
    this.position = { x: x, y: y };
    this.drawPositionX = this.position.x - this.halfWidth;
    this.drawPositionY = this.position.y - this.height;
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

  getSpriteSheetDimensions(sheet: number, sprite: number): number {
    return Math.floor(sheet / sprite) - 1;
  }
}
