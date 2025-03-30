import { ALL_ASSETS } from "../constants/assets.js";
import { ISprite } from "../interfaces/IEntity.js";
import { Position } from "../constants/types.js";

const enum SPRITE_STATE {
  ANIMATE_FRAMES,
  ANIMATE_ROWS,
}

export class Sprite implements ISprite {
  private image!: HTMLImageElement;

  private scale: number = 1;
  private width: number = this.spriteWidth;
  private height: number = this.spriteHeight;

  private halfWidth = this.width / 2;

  private animationFrame = 0;
  private animationRow = 0;
  private maxAnimationFrame!: number;
  private maxAnimationRow!: number;
  private state!: number;

  position!: Position;

  constructor(
    fileName: string,
    private spriteWidth: number,
    private spriteHeight: number
  ) {
    this.image = ALL_ASSETS.get(fileName);
    this.maxAnimationFrame =
      Math.floor(this.image.width / this.spriteWidth) - 1;
    this.maxAnimationRow =
      Math.floor(this.image.height / this.spriteHeight) - 1;

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
      this.position.x - this.halfWidth,
      this.position.y - this.height,
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
