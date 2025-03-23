import { ANIMATION } from "../constants/animation.js";
import { Position } from "../constants/types.js";

export abstract class TextBase {
  protected text: string = "";
  protected size: number = 0;
  protected align: CanvasTextAlign = "center";
  protected lineWidth: number = 0;
  protected state: number = ANIMATION.ANIMATING;
  protected alpha: number = 1;

  constructor(protected position: Position) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.font = this.size + "px canterbury";
    ctx.textAlign = this.align;
    ctx.textBaseline = "middle";
    ctx.lineWidth = this.lineWidth;
    ctx.strokeText(this.text, this.position.x, this.position.y);
    ctx.fillText(this.text, this.position.x, this.position.y);
  }

  abstract update(): void;

  setText(text: string): TextBase {
    this.text = text;
    return this;
  }

  setSize(size: number): TextBase {
    this.size = size;
    return this;
  }

  setAlignment(alignment: CanvasTextAlign): TextBase {
    this.align = alignment;
    return this;
  }
}
