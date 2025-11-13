export class AnimationRepeat {
  update(): void {
    // if (!Time.eventUpdate) return;
    this.currentFrame < this.maxFrames ? this.currentFrame++ : (this.currentFrame = 0);
  }
}
