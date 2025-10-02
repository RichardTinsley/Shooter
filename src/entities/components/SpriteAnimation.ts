import { Time } from "../../handlers/Time.js";
import { Sprite } from "./Sprite.js";

export enum ANIMATE {
  FINISHED,
  ROW_ONCE,
  ROW_REPEATEDLY,
  ROWS_REPEATEDLY,
}

export class SpriteAnimation extends Sprite {
  protected maxFrames!: number;
  protected maxRows!: number;
  protected animationState!: number;

  constructor() {
    super();
  }

  update(): void {
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

  initialise(): this {
    this.maxFrames = Math.floor(this.image.width / this.spriteWidth) - 1;
    this.maxRows = Math.floor(this.image.height / this.spriteHeight) - 1;

    this.maxRows === 0
      ? (this.animationState = ANIMATE.ROW_REPEATEDLY)
      : (this.animationState = ANIMATE.ROWS_REPEATEDLY);
    return this;
  }

  setSpriteSheetRowAndAnimateOnce(row: number = 0, state: number): this {
    this.currentRow = row;
    this.animationState = state;
    return this;
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

  animateMultipleRowsRepeatedly(): void {
    if (this.currentFrame < this.maxFrames) {
      this.currentFrame++;
    } else {
      this.currentRow++;
      this.currentFrame = 0;
    }

    if (this.currentRow === this.maxRows && this.currentFrame <= this.maxFrames) {
      this.currentRow = 0;
      this.currentFrame = 0;
    }
  }
}
