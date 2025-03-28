import { IText, Position } from "../interfaces/IEntity.js";

export class Text implements IText {
  protected text: string = "";
  protected size: number = 0;
  protected align: CanvasTextAlign = "center";
  protected lineWidth: number = 0;
  protected alpha: number = 1;
  protected state: number = 0;
  position: Position = { x: 0, y: 0 };

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

  getText(): string {
    return this.text;
  }

  setText(text: string): this {
    this.text = text;
    return this;
  }

  getPosition(): Position {
    return this.position;
  }

  setPosition(x: number, y: number): this {
    if (x) this.position.x = x;
    if (y) this.position.y = y;
    return this;
  }

  setSize(size: number): this {
    this.size = size;
    return this;
  }

  setAlignment(alignment: CanvasTextAlign): this {
    this.align = alignment;
    return this;
  }

  setState(state: number): this {
    this.state = state;
    return this;
  }
}
