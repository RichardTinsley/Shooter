import { Component } from "../classes/Component.js";

export class Text extends Component {
  protected text!: string;
  protected align: CanvasTextAlign = "center";
  protected lineWidth!: number;
  protected alpha: number = 1;

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

  setText(text: string): this {
    this.text = text;
    return this;
  }

  getWidth(): number {
    return this.text.length * (this.size.height / 1.85);
  }

  setAlignment(alignment: CanvasTextAlign): this {
    this.align = alignment;
    return this;
  }
}
