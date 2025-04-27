import { Text } from "./Text.js";
import { STATE } from "../../constants/states.js";
import { oscillate, OSCILLATIONS } from "../../utilities/math.js";
import { COLOURS } from "../../constants/colours.js";

export class TextGlow extends Text {
  lineWidth: number = 3;
  protected glow: number = 0;
  protected glowMaximum: number = 13;
  protected frequency: number = 0.7;
  protected amplitude: number = 0.2;
  protected startTime = Date.now();

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.shadowColor = COLOURS.GLOW;
    ctx.shadowBlur = this.glow;
    super.draw(ctx);
    ctx.shadowBlur = 0;
  }

  update() {
    switch (this.state) {
      case STATE.MOUSEOVER:
        this.glowChanger();
        this.glow += oscillate(
          OSCILLATIONS.COSINE,
          this.startTime,
          this.frequency,
          this.amplitude
        );
        break;
      case STATE.MOUSEOFF:
        this.glowChanger();
        break;
    }
  }

  glowChanger() {
    if (this.state === STATE.MOUSEOVER) {
      if (this.glow < this.glowMaximum) this.glow += 2;
    } else {
      if (this.glow > 0) this.glow--;
    }
  }
}
