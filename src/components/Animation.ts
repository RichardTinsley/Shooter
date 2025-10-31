// import { Time } from "../../handlers/Time.js";
import { ImageComponent } from "./Image.js";

export enum Animate {
  Finished,
  RowOnce,
  RowRepeat,
  RowsRepeat,
}

export class AnimationComponent extends ImageComponent {
  protected maxFrames!: number;
  protected maxRows!: number;
  protected animationState!: number;

  constructor() {
    super();
  }

  update(): void {
    // if (!Time.eventUpdate) return;

    switch (this.animationState) {
      case Animate.RowOnce:
        this.animateSingleRowOnce();
        break;
      case Animate.RowRepeat:
        this.animateSingleRowRepeatedly();
        break;
      case Animate.RowsRepeat:
        this.animateMultipleRowsRepeatedly();
        break;
    }
  }

  initialise(): this {
    // this.maxFrames = Math.floor(this.image.width / this.spriteWidth) - 1;
    // this.maxRows = Math.floor(this.image.height / this.spriteHeight) - 1;

    this.maxRows === 0
      ? (this.animationState = Animate.RowRepeat)
      : (this.animationState = Animate.RowsRepeat);
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
      this.animationState = Animate.Finished;
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
