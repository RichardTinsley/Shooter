import { Text } from "./Text.js";
import { oscillate, OSCILLATIONS } from "../../utilities/math.js";

export class TextPulsate extends Text {
  private frequency: number = 2;
  private amplitude: number = 5;

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D) {
    super.draw(ctx);
  }

  update(event: [boolean, number]) {
    this.size = oscillate(OSCILLATIONS.COSINE, this.frequency, this.amplitude);
    this.size += 80;
  }
}
