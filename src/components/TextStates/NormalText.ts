import { Component } from "../../classes/Component.js";
import { getColour, COLOURS } from "../../constants/colours.js";
import { ITextState, Text } from "../Text.js";

export class NormalText extends Component implements ITextState {
  protected text!: string;
  protected align: CanvasTextAlign = "center";
  protected lineWidth!: number;
  protected alpha: number = 1;

  protected frequency: number = 1;
  protected amplitude: number = 1;
  protected startTime: number = Date.now();

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

  setText(text: string, height: number): this {
    this.text = text;
    this.setSharedSize({
      width: Math.ceil(text.length * (height / 1.85)),
      height: height,
    });
    return this;
  }

  setAlignment(alignment: CanvasTextAlign): this {
    this.align = alignment;
    return this;
  }
}
