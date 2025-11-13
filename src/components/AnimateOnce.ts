export class AnimateOnce {
  update(): void {
    // if (!Time.eventUpdate) return;
    this.currentFrame < this.maxFrames
      ? this.currentFrame++
      : (this.animationState = Animate.Finished);
  }
}
