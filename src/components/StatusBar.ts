import { getColour, COLOURS } from "../constants/colours.js";
import { Information } from "../types/types.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class StatusBarComponent extends ComponentBaseClass {
  draw(ctx: CanvasRenderingContext2D, information: Information): void {
    ctx.lineJoin = "round";
    const statusBarWidth =
      information.scaledSize.width * (information.currentStatus / information.maxStatus);
    this.drawBorder(ctx, information, getColour(COLOURS.WHITE), information.scaledSize.height);
    this.drawBox(ctx, information, getColour(COLOURS.BLACK), information.scaledSize.width);
    this.drawBorder(ctx, information, getColour(COLOURS.BLACK), information.halfHeight);
    this.drawBox(ctx, information, information.statusBarColour, statusBarWidth);
  }

  drawBox(
    ctx: CanvasRenderingContext2D,
    information: Information,
    colour: string,
    width: number
  ): void {
    ctx.fillStyle = colour;
    ctx.fillRect(
      information.position.x - information.halfWidth,
      information.position.y - information.scaledSize.height,
      width,
      information.scaledSize.height
    );
  }

  drawBorder(
    ctx: CanvasRenderingContext2D,
    information: Information,
    colour: string,
    width: number
  ): void {
    ctx.strokeStyle = colour;
    ctx.lineWidth = width;
    ctx.strokeRect(
      information.position.x - information.halfWidth,
      information.position.y - information.scaledSize.height,
      information.scaledSize.width,
      information.scaledSize.height
    );
  }
}
