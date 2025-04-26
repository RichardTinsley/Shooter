import { Text } from "./Text.js";
import { oscillate, OSCILLATIONS } from "../../utilities/math.js";

export class TextPulsate extends Text {
  private frequency: number = 1;
  private amplitude: number = 1;
  private startTime = Date.now();

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D) {
    super.draw(ctx);
  }

  update() {
    const newSize = oscillate(
      OSCILLATIONS.COSINE,
      this.startTime,
      this.frequency,
      this.amplitude
    );
    this.size += newSize;
  }
}
