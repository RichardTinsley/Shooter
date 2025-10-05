import { Component } from "../classes/Component.js";
import { getColour, COLOURS } from "../constants/colours.js";

export class StatusBar extends Component {
  private currentStatus!: number;
  private maxStatus!: number;
  private statusBarColour: string = getColour(COLOURS.WHITE);

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineJoin = "round";
    this.drawBorder(ctx, getColour(COLOURS.WHITE), this.size.height);
    this.drawBox(ctx, getColour(COLOURS.BLACK));
    this.drawBorder(ctx, getColour(COLOURS.BLACK), this.size.height / 2);
    this.drawBox(
      ctx,
      this.statusBarColour,
      this.size.width * (this.currentStatus / this.maxStatus)
    );
  }

  drawBox(ctx: CanvasRenderingContext2D, colour: string, width: number = this.size.width): void {
    ctx.fillStyle = colour;
    ctx.fillRect(
      this.position.x - this.drawOffsetX,
      this.position.y - this.drawOffsetY,
      width,
      this.size.height
    );
  }

  drawBorder(ctx: CanvasRenderingContext2D, lineColour: string, lineWidth: number): void {
    ctx.strokeStyle = lineColour;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(
      this.position.x - this.drawOffsetX,
      this.position.y - this.drawOffsetY,
      this.size.width,
      this.size.height
    );
  }

  update(): void {}

  setStatus(currentStatus: number, maxStatus: number): this {
    this.currentStatus = currentStatus;
    this.maxStatus = maxStatus;
    return this;
  }

  setStatusBarColour(colour: string): void {
    this.statusBarColour = colour;
  }

  getCurrentStatus(): number {
    return this.currentStatus;
  }

  increaseCurrentStatus(increment: number): void {
    this.currentStatus += increment;
  }

  decreaseCurrentStatus(decrement: number): void {
    this.currentStatus -= decrement;
  }
}
