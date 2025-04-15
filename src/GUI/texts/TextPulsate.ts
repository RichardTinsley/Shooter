import { Text } from "./Text.js";
import { oscillate, OSCILLATIONS } from "../../utilities/math.js";

export class TextPulsate extends Text {
  private frequency: number = 2;
  private amplitude: number = 5;
  private startTime!: number;
  constructor() {
    super();
    this.startTime = Date.now();
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
