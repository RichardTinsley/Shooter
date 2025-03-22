import { TEXT_SIZES } from "../constants/text.js";
import { ANIMATION } from "../constants/animation.js";
import { Position } from "../constants/types.js";

export class Text {
  private size: number = TEXT_SIZES.MENUITEM_TEXT;
  private align: CanvasTextAlign = "center";
  private lineWidth: number = Math.floor(this.size / 6);
  protected state: number = ANIMATION.ANIMATING;
  protected alpha: number = 1;

  constructor(protected text: string, protected position: Position) {}

  draw(ctx: CanvasRenderingContext2D): void {
    switch (this.state) {
      case ANIMATION.ANIMATING:
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.font = "bold " + this.size + "px canterbury";
        ctx.textAlign = this.align;
        ctx.textBaseline = "middle";
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
        ctx.strokeText(this.text, this.position.x, this.position.y);
        ctx.fillText(this.text, this.position.x, this.position.y);
        break;
      case ANIMATION.FINISHED:
        break;
    }
  }

  update(): void {}

  setAlignment(alignment: CanvasTextAlign): Text {
    this.align = alignment;
    return this;
  }

  setSize(size: number): Text {
    this.size = size;
    return this;
  }
}
