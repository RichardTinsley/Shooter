import { Text } from "./Text.js";
import { ANIMATION } from "../../constants/animation.js";
import { oscillate, OSCILLATIONS } from "../../utilities/math.js";
import { COLOURS } from "../../constants/colours.js";

export class TextGlow extends Text {
  lineWidth: number = 3;
  private glow: number = 0;
  private frequency: number = 0.7;
  private amplitude: number = 0.2;
  private startTime!: number;

  constructor() {
    super();
    this.startTime = Date.now();
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.shadowColor = COLOURS.GLOW;
    ctx.shadowBlur = this.glow;
    super.draw(ctx);
    ctx.shadowBlur = 0;
  }

  update() {
    switch (this.state) {
      case ANIMATION.MOUSEOVER:
        this.glowChanger();
        this.glow += oscillate(
          OSCILLATIONS.COSINE,
          this.startTime,
          this.frequency,
          this.amplitude
        );
        break;
      case ANIMATION.NORMAL:
        this.glowChanger();
        break;
    }
  }

  glowChanger() {
    if (this.state === ANIMATION.MOUSEOVER) {
      if (this.glow < 13) this.glow++;
    } else {
      if (this.glow > 0) this.glow--;
    }
  }
}
