import { ComponentBaseClass } from "./ComponentBaseClass";

export class AnimationRepeatComponent extends ComponentBaseClass {
  update(): void {
    // if (!Time.eventUpdate) return;
    this.currentFrame < this.maxFrames ? this.currentFrame++ : (this.currentFrame = 0);
  }
}
