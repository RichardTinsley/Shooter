import { TextBase } from "./TextBase.js";
import { Position } from "../constants/types.js";
import { ANIMATION } from "../constants/animation.js";
import { oscillate } from "../utilities/math.js";

export class GlowText extends TextBase {
  private glow: number = -0.5;
  private delta: number = 0.1;
  protected lineWidth: number = 3;

  constructor(protected position: Position) {
    super(position);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.shadowColor = "#d53";
    ctx.shadowBlur = this.glow;
    super.draw(ctx);
    ctx.shadowBlur = 0;
  }

  update() {
    switch (this.state) {
      case ANIMATION.ANIMATING:
        [this.glow, this.delta] = oscillate(this.glow, this.delta, -0.5, 8);
        break;
      case ANIMATION.FINISHED:
        break;
    }
  }
}
