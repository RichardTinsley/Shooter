import { Position } from "../constants/types.js";
import { Text } from "./Text.js";
import { oscillate, OSCILLATIONS } from "../utilities/math.js";

export class TextFade extends Text {
  private frequency: number = 0.1;
  private amplitude: number = 0.6;

  constructor(position: Position) {
    super(position);
  }

  draw(ctx: CanvasRenderingContext2D) {
    super.draw(ctx);
  }

  update() {
    this.alpha = oscillate(OSCILLATIONS.COSINE, this.frequency, this.amplitude);
    this.alpha += 0.5;
  }
}
