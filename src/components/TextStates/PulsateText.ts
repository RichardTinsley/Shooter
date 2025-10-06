import { oscillate, OSCILLATIONS } from "../../utilities/math.js";
import { ITextState, Text } from "../Text.js";
import { NormalText } from "./NormalText.js";

export class PulsateText extends NormalText implements ITextState {
  protected amplitude = 0.25;
  protected frequency = 0.5;
  constructor(protected state: Text) {
    super(state);
  }

  draw(ctx: CanvasRenderingContext2D) {
    super.draw(ctx);
  }

  update() {
    this.size.height += oscillate(
      OSCILLATIONS.COSINE,
      this.startTime,
      this.frequency,
      this.amplitude
    );
  }
}
