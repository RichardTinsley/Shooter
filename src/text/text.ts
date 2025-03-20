import { COLOURS } from "../constants/colours.js";
import { TEXT_SIZES } from "../constants/text.js";
import { ANIMATION } from "../constants/animation.js";
import { Position } from "../types/position.js";

export class Text {
  private colour: string = COLOURS.WHITE;
  private alpha: number = 1;
  private size: number = TEXT_SIZES.MENUITEM_TEXT;
  private align: CanvasTextAlign = "center";
  private baseline: CanvasTextBaseline = "middle";
  private lineWidth: number = Math.floor(this.size / 6);
  private state: number = ANIMATION.ANIMATING;

  constructor(private text: string, private position: Position) {}

  public draw(ctx: CanvasRenderingContext2D): void {
    switch (this.state) {
      case ANIMATION.ANIMATING:
        ctx.beginPath();
        ctx.fillStyle = `rgba(${this.colour}${this.alpha})`;
        ctx.font = "bold " + this.size + "px canterbury";
        ctx.textAlign = this.align;
        ctx.textBaseline = this.baseline;
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
        ctx.strokeText(this.text, this.position.x, this.position.y);
        ctx.fillText(this.text, this.position.x, this.position.y);
        ctx.closePath();
        break;
      case ANIMATION.FINISHED:
        break;
    }
  }

  public update(): void {}

  public setAlignment(alignment: CanvasTextAlign): void {
    this.align = alignment;
  }

  public setSize(size: number): Text {
    this.size = size;
    return this;
  }
}
