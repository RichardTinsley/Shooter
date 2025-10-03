import { COLOURS, getColour } from "../../constants/colours.js";
import { IDrawable } from "../../interfaces/interfaces.js";
import { Position } from "../../types/types.js";

export class StatusBar implements IDrawable {
  private width!: number;
  private height!: number;
  private currentStatus!: number;
  private maxStatus!: number;

  private lineJoin: CanvasLineJoin = "bevel";
  private lineWidth: number = 4;
  private statusBarFillColour: string = getColour(COLOURS.GREEN, 1);
  private boxFillColour: string = getColour(COLOURS.BLACK, 1);
  private borderColour: string = getColour(COLOURS.WHITE, 1);
  private position!: Position;

  private drawOffsetX!: number;
  private drawOffsetY!: number;

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineJoin = this.lineJoin;
    ctx.lineWidth = this.lineWidth;
    this.drawBorderBox(ctx);
    this.drawStatusBar(ctx);
  }

  drawBorderBox(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = this.borderColour;
    ctx.strokeRect(
      this.position.x - this.drawOffsetX,
      this.position.y - this.drawOffsetY,
      this.width,
      this.height
    );
  }

  drawStatusBar(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.boxFillColour;
    ctx.fillRect(
      this.position.x - this.drawOffsetX,
      this.position.y - this.drawOffsetY,
      this.width,
      this.height
    );

    ctx.fillStyle = this.statusBarFillColour;
    ctx.fillRect(
      this.position.x - this.drawOffsetX,
      this.position.y - this.drawOffsetY,
      this.width * (this.currentStatus / this.maxStatus),
      this.height
    );
  }

  setPosition(position: Position): this {
    this.position = position;
    return this;
  }

  setDimensions(width: number, height: number): this {
    this.width = width;
    this.height = height;
    return this;
  }

  setStatus(currentStatus: number, maxStatus: number): this {
    this.currentStatus = currentStatus;
    this.maxStatus = maxStatus;
    return this;
  }

  setDrawOffsets(offsetY: number, offsetX: number = this.width / 2): this {
    this.drawOffsetX = offsetX;
    this.drawOffsetY = offsetY + this.height * 2;
    return this;
  }

  getCurrentStatus(): number {
    return this.currentStatus;
  }

  increaseStatusBar(increment: number): void {
    this.currentStatus += increment;
  }

  decreaseStatusBar(decrement: number): void {
    this.currentStatus -= decrement;
  }
}
