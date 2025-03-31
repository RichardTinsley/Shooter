import { Text } from "./Text.js";
import { ANIMATION } from "../../constants/animation.js";
import { oscillate, OSCILLATIONS } from "../../utilities/math.js";

export class TextGlow extends Text {
  lineWidth: number = 3;
  private glow: number = 13;
  private frequency: number = 0.7;
  private amplitude: number = 0.2;

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.shadowColor = "#d53";
    ctx.shadowBlur = this.glow;
    super.draw(ctx);
    ctx.shadowBlur = 0;
  }

  update(event: { update: boolean; delta: number }) {
    switch (this.state) {
      case ANIMATION.ANIMATING:
        this.glow += oscillate(
          OSCILLATIONS.COSINE,
          this.frequency,
          this.amplitude
        );
        break;
      case ANIMATION.FINISHED:
        break;
    }
  }
}
