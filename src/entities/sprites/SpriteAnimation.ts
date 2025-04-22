import { Time } from "../../handlers/Time.js";
import { Sprite } from "./Sprite.js";

const enum ANIMATE {
  FINISHED,
  ROW_ONCE,
  ROW_REPEATEDLY,
  ROWS_REPEATEDLY,
}

export class SpriteAnimation extends Sprite {
  protected maxFrames!: number;
  protected maxRows!: number;
  protected animationState!: number;

  constructor(fileName: string, spriteWidth: number, spriteHeight: number) {
    super(fileName, spriteWidth, spriteHeight);

    this.maxFrames = Math.floor(this.image.width / this.width) - 1;
    this.maxRows = Math.floor(this.image.height / this.height) - 1;

    this.maxRows === 0
      ? (this.animationState = ANIMATE.ROW_REPEATEDLY)
      : (this.animationState = ANIMATE.ROWS_REPEATEDLY);
  }

  animate() {
    if (!Time.eventUpdate) return;

    switch (this.animationState) {
      case ANIMATE.ROW_ONCE:
        this.animateSingleRowOnce();
        break;
      case ANIMATE.ROW_REPEATEDLY:
        this.animateSingleRowRepeatedly();
        break;
      case ANIMATE.ROWS_REPEATEDLY:
        this.animateMultipleRowsRepeatedly();
        break;
    }
  }

  animateSingleRowOnce(): void {
    if (this.currentFrame < this.maxFrames) {
      this.currentFrame++;
    } else {
      this.animationState = ANIMATE.FINISHED;
    }
  }

  animateSingleRowRepeatedly(): void {
    if (this.currentFrame < this.maxFrames) {
      this.currentFrame++;
    } else {
      this.currentFrame = 0;
    }
  }

  animateMultipleRowsRepeatedly() {
    if (this.currentFrame < this.maxFrames) {
      this.currentFrame++;
    } else {
      this.currentRow++;
      this.currentFrame = 0;
    }

    if (
      this.currentRow === this.maxRows &&
      this.currentFrame <= this.maxFrames
    ) {
      this.currentRow = 0;
      this.currentFrame = 0;
    }
  }

  setSpriteSheetRowAndAnimateOnce(animationRow: number = 0): this {
    this.currentRow = animationRow;
    this.animationState = ANIMATE.ROW_ONCE;
    return this;
  }
}
