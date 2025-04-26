import { Text } from "./Text.js";
import { oscillate, OSCILLATIONS } from "../../utilities/math.js";

export class TextFade extends Text {
  protected frequency: number = 0.1;
  protected amplitude: number = 1;
  protected alpha: number = -0.5;
  protected startTime = Date.now();

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D) {
    super.draw(ctx);
  }

  update() {
    const newAlpha = oscillate(
      OSCILLATIONS.COSINE,
      this.startTime,
      this.frequency,
      this.amplitude
    );
    this.alpha = newAlpha * -1 + 0.5;
  }
}
