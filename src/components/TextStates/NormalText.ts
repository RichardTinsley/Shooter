import { Component } from "../../classes/Component.js";
import { getColour, COLOURS } from "../../constants/colours.js";
import { ITextState, Text } from "../Text.js";

export class NormalText extends Component implements ITextState {
  protected text!: string;
  protected align: CanvasTextAlign = "center";
  protected lineWidth!: number;
  protected alpha: number = 1;

  constructor(protected state: Text) {
    super();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = getColour(COLOURS.BLACK, this.alpha);
    ctx.fillStyle = getColour(COLOURS.WHITE, this.alpha);
    ctx.font = this.size.height + "px canterbury";
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
