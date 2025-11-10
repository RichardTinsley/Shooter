// import { Time } from "../../handlers/Time.js";
import { ImageComponent } from "./Image.js";

export enum Animate {
  Finished,
  RowOnce,
  RowRepeat,
  RowsRepeat,
}

export class AnimationComponent extends ImageComponent {
  update(): void {
    // if (!Time.eventUpdate) return;

    switch (this.animationState) {
      case Animate.RowOnce:
        this.animateRowOnce();
        break;
      case Animate.RowRepeat:
        this.animateRowRepeatedly();
        break;
      case Animate.RowsRepeat:
        this.animateRowsRepeatedly();
        break;
    }
  }

  initialise(): this {
    this.maxFrames = Math.floor(this.image.width / this.spriteWidth) - 1;
    this.maxRows = Math.floor(this.image.height / this.spriteHeight) - 1;

    this.maxRows === 0
      ? (this.animationState = Animate.RowRepeat)
      : (this.animationState = Animate.RowsRepeat);
    return this;
  }

  setAnimationState(state: number, row: number = 0): this {
    this.currentRow = row;
    this.animationState = state;
    return this;
  }

  animateRowOnce(): void {
    this.currentFrame < this.maxFrames
      ? this.currentFrame++
      : (this.animationState = Animate.Finished);
  }

  animateRowRepeatedly(): void {
    this.currentFrame < this.maxFrames ? this.currentFrame++ : (this.currentFrame = 0);
  }

  animateRowsRepeatedly(): void {
    this.currentFrame < this.maxFrames ? this.currentFrame++ : this.currentRow++,
      (this.currentFrame = 0);

    this.currentRow === this.maxRows && this.currentFrame <= this.maxFrames
      ? (this.currentRow = 0)
      : (this.currentFrame = 0);
  }
}
