import { Position } from "../constants/types.js";

export class Text {
  protected text: string = "";
  protected size: number = 0;
  protected align: CanvasTextAlign = "center";
  protected lineWidth: number = 0;
  protected alpha: number = 1;

  protected state: number = 0;

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

  update(): void {}

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
}
