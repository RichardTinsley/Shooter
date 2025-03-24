import { Position } from "../constants/types.js";
import { TextBase } from "./TextBase.js";
import { oscillate } from "../utilities/math.js";

export class FadeText extends TextBase {
  alpha: number = 1.0;
  delta: number = 0.01;

  constructor(position: Position) {
    super(position);
  }

  draw(ctx: CanvasRenderingContext2D) {
    super.draw(ctx);
  }

  update() {
    [this.alpha, this.delta] = oscillate(this.alpha, this.delta, -0.5, 1.0);
  }
}
