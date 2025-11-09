import { ComponentBaseClass } from "./ComponentBaseClass.js";
import { COLOURS, getColour } from "../constants/colours.js";
import { Information } from "../types/types.js";

export class TextComponent extends ComponentBaseClass {
  protected align: CanvasTextAlign = "center";
  protected lineWidth!: number;
  protected strokeColour = COLOURS.BLACK;
  protected fillColour = COLOURS.WHITE;

  draw(ctx: CanvasRenderingContext2D, information: Information): void {
    ctx.strokeStyle = getColour(this.strokeColour, information.alpha);
    ctx.fillStyle = getColour(this.fillColour, information.alpha);
    ctx.font = information.scaledSize.height + "px canterbury";
    ctx.textAlign = this.align;
    ctx.textBaseline = "middle";
    ctx.lineWidth = this.lineWidth;
    ctx.strokeText(information.visual as string, information.position.x, information.position.y);
    ctx.fillText(information.visual as string, information.position.x, information.position.y);
  }

  update(information: Information): void {
    return;
  }
}
