import { Position } from "../types/position.js";
import { Text } from "./Text.js";

export class FadeText extends Text implements IFadeText {
  alpha: number = 0;
  delta: number = 0.01;
  constructor(text: string, position: Position) {
    super(text, position);
  }

  draw(ctx: CanvasRenderingContext2D) {
    super.draw(ctx);
  }

  update() {
    this.oscillateAlpha();
  }

  oscillateAlpha() {
    this.alpha += this.delta;
    if (this.alpha <= -0.5 || this.alpha >= 1.0) this.delta = -this.delta;
  }
}
