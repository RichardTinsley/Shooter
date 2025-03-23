import { TextBase } from "./TextBase.js";
import { Position } from "../constants/types.js";
import { ANIMATION } from "../constants/animation.js";
import { oscillate } from "../utilities/math.js";

export class GlowText extends TextBase {
  private textShadowBlur: number = -0.5;
  private delta: number = 0.1;
  protected lineWidth: number = 3;

  constructor(protected position: Position) {
    super(position);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.shadowColor = "#d53";
    ctx.shadowBlur = this.textShadowBlur;
    super.draw(ctx);
    ctx.shadowBlur = 0;
  }

  update() {
    switch (this.state) {
      case ANIMATION.ANIMATING:
        [this.textShadowBlur, this.delta] = oscillate(
          this.textShadowBlur,
          this.delta,
          -0.5,
          8
        );

        const time = Date.now() / 1000; // Current time in seconds
        this.position.y += this.oscillate2("cosine", 1, 1, time);

        break;
      case ANIMATION.FINISHED:
        break;
    }
  }

  oscillate2(
    waveType: string,
    frequency: number,
    amplitude: number,
    time: number
  ): number {
    // Defaults
    waveType = waveType || "cos";
    frequency = frequency || 1;
    amplitude = amplitude || 1;
    time = time || Date.now() / 1000; // Use current time in seconds

    try {
      waveType = waveType.toLowerCase();
      const x = time * frequency;
      switch (waveType) {
        case "1":
        case "sin":
        case "sine":
          return Math.sin(2 * Math.PI * x) * amplitude;
        case "2":
        case "cos":
        case "cosine":
          return Math.cos(2 * Math.PI * x) * amplitude;
        case "3":
        case "square":
          return (
            Math.floor(Math.sin(2 * Math.PI * x)) * amplitude * 2 + amplitude
          );
        case "4":
        case "saw":
        case "sawtooth":
          const adj = x < 0 ? amplitude : -amplitude;
          return ((x % frequency) / frequency) * amplitude * 2 + adj;
        case "5":
        case "tri":
        case "triangle":
          const adjTri = x < 0 ? amplitude : -amplitude;
          return (
            (Math.abs(((x % frequency) / frequency) * amplitude * 2 + adjTri) -
              amplitude / 2) *
            2
          );
        default:
          return 0;
      }
    } catch (e) {
      return 0;
    }
  }
}
