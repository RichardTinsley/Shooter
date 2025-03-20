import { ANIMATION } from "../constants/animation.js";
import { Text } from "./Text.js";

export class FadeText extends Text {
  private alpha: number = 0;
  private delta: number = 0.05;
  constructor() {
    super();
  }

  public draw(ctx: CanvasRenderingContext2D) {
    switch (this.state) {
      case ANIMATION.ANIMATING:
        super.draw(ctx);
        break;
      case ANIMATION.FINISHED:
        break;
    }
  }

  public update() {
    super.update();
    switch (this.state) {
      case ANIMATION.ANIMATING:
        this.oscillateAlpha();
        break;
      case ANIMATION.FINISHED:
        break;
    }
  }

  private oscillateAlpha() {
    this.alpha += this.delta;
    if (this.alpha <= -0.5 || this.alpha >= 2) this.delta = -this.delta;
  }
}
