import { oscillate, OSCILLATIONS } from "../../utilities/math.js";
import { ITextState, Text } from "../Text.js";
import { NormalText } from "./NormalText.js";
import { COLOURS, getColour } from "../../constants/colours.js";

export class PulsateText extends NormalText implements ITextState {
  protected amplitude: number = 1;
  protected frequency: number = 1;
  protected glowMaximum: number = 3;
  protected pulsateFrequency: number = 1;
  protected pulsateAmplitude: number = 1;
  protected pulsateStartTime: number = Date.now();

  constructor(protected state: Text) {
    super(state);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.shadowColor = getColour(COLOURS.TEXT_GLOW);
    // ctx.shadowBlur = this.glow;
    super.draw(ctx);
    ctx.shadowBlur = 0;
  }

  update() {
    this.size.height += oscillate(
      OSCILLATIONS.COSINE,
      this.pulsateStartTime,
      this.pulsateFrequency,
      this.pulsateAmplitude
    );
    super.update();
  }
}
