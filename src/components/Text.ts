import { ComponentBaseClass } from "./ComponentBaseClass.js";
import { COLOURS, getColour } from "../constants/colours.js";
import { Information } from "../types/types.js";

export class TextComponent extends ComponentBaseClass {
  draw(ctx: CanvasRenderingContext2D, information: Information): void {
    ctx.strokeStyle = getColour(information.strokeColour, information.alpha);
    ctx.fillStyle = getColour(information.fillColour, information.alpha);
    ctx.font = information.scaledSize.height + "px canterbury";
    ctx.textAlign = information.align;
    ctx.textBaseline = "middle";
    ctx.lineWidth = information.lineWidth;
    ctx.strokeText(information.visual as string, information.position.x, information.position.y);
    ctx.fillText(information.visual as string, information.position.x, information.position.y);
  }
}
