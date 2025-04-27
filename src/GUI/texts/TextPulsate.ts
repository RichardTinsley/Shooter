import { oscillate, OSCILLATIONS } from "../../utilities/math.js";
import { COLOURS } from "../../constants/colours.js";
import { TextGlow } from "./TextGlow.js";

export class TextPulsate extends TextGlow {
  protected amplitude: number = 1;
  protected frequency: number = 1;
  protected glowMaximum: number = 3;
  private pulsateFrequency: number = 1;
  private pulsateAmplitude: number = 1;
  private pulsateStartTime: number = Date.now();

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
    this.size += oscillate(
      OSCILLATIONS.COSINE,
      this.pulsateStartTime,
      this.pulsateFrequency,
      this.pulsateAmplitude
    );
    super.update();
  }
}
