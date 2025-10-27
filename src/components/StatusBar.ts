import { getColour, COLOURS } from "../constants/colours.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class StatusBarComponent extends ComponentBaseClass {
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineJoin = "round";
    this.drawBorder(ctx, getColour(COLOURS.WHITE), this.information.scaledSize.height);
    this.drawBox(ctx, getColour(COLOURS.BLACK), this.information.scaledSize.width);
    this.drawBorder(ctx, getColour(COLOURS.BLACK), this.information.halfHeight);
    this.drawBox(
      ctx,
      this.information.statusBarColour,
      this.information.scaledSize.width *
        (this.information.currentStatus / this.information.maxStatus)
    );
  }

  drawBox(ctx: CanvasRenderingContext2D, colour: string, width: number): void {
    ctx.fillStyle = colour;
    ctx.fillRect(
      this.information.position.x - this.information.halfWidth,
      this.information.position.y - this.information.scaledSize.height,
      width,
      this.information.scaledSize.height
    );
  }

  drawBorder(ctx: CanvasRenderingContext2D, lineColour: string, lineWidth: number): void {
    ctx.strokeStyle = lineColour;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(
      this.information.position.x - this.information.halfWidth,
      this.information.position.y - this.information.scaledSize.height,
      this.information.scaledSize.width,
      this.information.scaledSize.height
    );
  }

  update(): void {}
}
