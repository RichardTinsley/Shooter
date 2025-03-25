import { Position } from "../constants/types.js";
import { oscillate, OSCILLATIONS } from "../utilities/math.js";

const enum TEXT_STATES {
  PLAIN,
  FADE,
  GLOW,
}

export class Text {
  private text: string = "";
  private size: number = 0;
  private align: CanvasTextAlign = "center";
  private lineWidth: number = 0;
  private state: number = TEXT_STATES.PLAIN;
  private alpha: number = 1;
  private shadowBlur: number = 0;

  private frequency: number = 0;
  private amplitude: number = 0;

  constructor(private position: Position) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.font = this.size + "px canterbury";
    ctx.textAlign = this.align;
    ctx.textBaseline = "middle";
    ctx.lineWidth = this.lineWidth;
    ctx.shadowColor = "#d53";
    ctx.shadowBlur = this.shadowBlur;
    ctx.strokeText(this.text, this.position.x, this.position.y);
    ctx.fillText(this.text, this.position.x, this.position.y);
    ctx.shadowBlur = 0;
  }

  update(): void {
    switch (this.state) {
      case TEXT_STATES.PLAIN:
        break;
      case TEXT_STATES.FADE:
        this.alpha = oscillate(
          OSCILLATIONS.COSINE,
          this.frequency,
          this.amplitude
        );
        this.alpha += 0.5;
        break;
      case TEXT_STATES.GLOW:
        this.shadowBlur += oscillate(
          OSCILLATIONS.COSINE,
          this.frequency,
          this.amplitude
        );
        break;
    }
  }

  setPosition(x: number = 0, y: number = 0): void {
    if (x) this.position.x = x;
    if (y) this.position.y = y;
  }

  getPosition(): Position {
    return this.position;
  }

  setText(text: string): Text {
    this.text = text;
    return this;
  }

  setSize(size: number): Text {
    this.size = size;
    return this;
  }

  setAlignment(alignment: CanvasTextAlign): Text {
    this.align = alignment;
    return this;
  }

  setState(state: number): Text {
    this.state = state;
    return this;
  }

  setFade(): Text {
    this.frequency = 0.1;
    this.amplitude = 0.6;
    this.state = TEXT_STATES.FADE;
    return this;
  }

  setGlow(): Text {
    this.lineWidth = 3;
    this.shadowBlur = 13;
    this.frequency = 0.7;
    this.amplitude = 0.2;
    this.state = TEXT_STATES.GLOW;
    return this;
  }
}
