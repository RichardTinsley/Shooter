import { Text } from "./Text.js";
import { ANIMATION } from "../../constants/animation.js";
import { oscillate, OSCILLATIONS } from "../../utilities/math.js";

export class TextGlow extends Text {
  lineWidth: number = 3;
  private glow: number = 0;
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

  update() {
    switch (this.state) {
      case ANIMATION.ANIMATING:
        this.glowChanger();
        this.glow += oscillate(
          OSCILLATIONS.COSINE,
          this.frequency,
          this.amplitude
        );
        break;
      case ANIMATION.FINISHED:
        this.glowChanger();
        break;
    }
  }

  glowChanger() {
    if (this.state === ANIMATION.ANIMATING) {
      if (this.glow < 13) this.glow++;
    } else {
      if (this.glow > 0) this.glow--;
    }
  }
}
