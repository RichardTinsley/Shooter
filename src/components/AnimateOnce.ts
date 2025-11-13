import { ComponentBaseClass } from "./ComponentBaseClass";

export class AnimateOnceComponent extends ComponentBaseClass {
  update(): void {
    // if (!Time.eventUpdate) return;
    this.currentFrame < this.maxFrames
      ? this.currentFrame++
      : (this.animationState = Animate.Finished);
  }
}
