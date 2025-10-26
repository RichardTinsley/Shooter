import { getColour, COLOURS } from "../constants/colours.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class StatusBarComponent extends ComponentBaseClass {
  private currentStatus = 0;
  private maxStatus = 0;
  private statusBarColour: string = getColour(COLOURS.WHITE);

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineJoin = "round";
    this.drawBorder(ctx, getColour(COLOURS.WHITE), this.information.size.height);
    this.drawBox(ctx, getColour(COLOURS.BLACK), this.information.size.width);
    this.drawBorder(ctx, getColour(COLOURS.BLACK), this.information.size.height / 2);
    this.drawBox(
      ctx,
      this.statusBarColour,
      this.information.size.width * (this.currentStatus / this.maxStatus)
    );
  }

  drawBox(ctx: CanvasRenderingContext2D, colour: string, width: number): void {
    ctx.fillStyle = colour;
    ctx.fillRect(
      this.information.position.x - this.information.halfWidth,
      this.information.position.y - this.information.size.height,
      width,
      this.information.size.height
    );
  }

  drawBorder(ctx: CanvasRenderingContext2D, lineColour: string, lineWidth: number): void {
    ctx.strokeStyle = lineColour;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(
      this.information.position.x - this.information.halfWidth,
      this.information.position.y - this.information.size.height,
      this.information.size.width,
      this.information.size.height
    );
  }

  update(): void {}

  setStatusBarColour(colour: string): void {
    this.statusBarColour = colour;
  }

  setStatus(currentStatus: number, maxStatus: number): this {
    this.currentStatus = currentStatus;
    this.maxStatus = maxStatus;
    return this;
  }

  getCurrentStatus(): number {
    return this.currentStatus;
  }

  increaseCurrentStatus(increment: number): void {
    this.currentStatus += increment;
    if (this.currentStatus > this.maxStatus) this.currentStatus = this.maxStatus;
  }

  decreaseCurrentStatus(decrement: number): void {
    this.currentStatus -= decrement;
    if (this.currentStatus < 0) this.currentStatus = 0;
  }
}
