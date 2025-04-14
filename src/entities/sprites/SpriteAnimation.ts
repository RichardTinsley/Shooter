import { Time } from "../../handlers/Time.js";
import { Sprite } from "./Sprite.js";

const enum SPRITE_STATE {
  ANIMATE_FRAMES,
  ANIMATE_ROWS,
}

export class SpriteAnimation extends Sprite {
  protected maxAnimationFrame!: number;
  protected maxAnimationRow!: number;
  protected animationState!: number;

  constructor(fileName: string, spriteWidth: number, spriteHeight: number) {
    super(fileName, spriteWidth, spriteHeight);

    this.maxAnimationFrame = this.getSpriteSheetDimensions(
      this.image.width,
      this.width
    );

    this.maxAnimationRow = this.getSpriteSheetDimensions(
      this.image.height,
      this.height
    );

    this.maxAnimationRow === 0
      ? (this.animationState = SPRITE_STATE.ANIMATE_FRAMES)
      : (this.animationState = SPRITE_STATE.ANIMATE_ROWS);
  }

  animate() {
    if (!Time.eventUpdate) return;

    switch (this.animationState) {
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
      this.animationFrame <= this.maxAnimationFrame
    ) {
      this.animationRow = 0;
      this.animationFrame = 0;
    }
  }

  getSpriteSheetDimensions(sheet: number, sprite: number): number {
    return Math.floor(sheet / sprite) - 1;
  }
}
