import { ComponentBaseClass } from "./ComponentBaseClass";

export class AnimationRepeatComponent extends ComponentBaseClass {
  update(): void {
    // if (!Time.eventUpdate) return;
    this.currentFrame < this.maxFrames ? this.currentFrame++ : this.currentRow++,
      (this.currentFrame = 0);

    this.currentRow === this.maxRows && this.currentFrame <= this.maxFrames
      ? (this.currentRow = 0)
      : (this.currentFrame = 0);
  }
}
