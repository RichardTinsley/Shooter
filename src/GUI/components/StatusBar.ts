import { COLOURS, getColour } from "../../constants/colours.js";
import { IDrawable } from "../../interfaces/interfaces.js";
import { Position } from "../../types/types.js";

export const JOINS: Record<string, CanvasLineJoin> = {
  round: "round",
  bevel: "bevel",
  miter: "miter",
};

export class StatusBar implements IDrawable {
  private width!: number;
  private height!: number;
  private currentStatus!: number;
  private maxStatus!: number;

  private lineJoin = JOINS.bevel;
  private outerBorderWidth: number = 5;
  private innerBorderWidth: number = 3;
  private statusBarFillColour: string = getColour(COLOURS.WHITE);
  private boxFillColour: string = getColour(COLOURS.BLACK);
  private borderColour: string = getColour(COLOURS.WHITE);
  private position!: Position;

  private drawOffsetX!: number;
  private drawOffsetY!: number;

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineJoin = this.lineJoin;
    this.drawBorder(ctx, this.borderColour, this.outerBorderWidth);
    this.drawBox(ctx, this.boxFillColour);
    this.drawBorder(ctx, this.boxFillColour, this.innerBorderWidth);
    this.drawBox(ctx, this.statusBarFillColour, this.width * (this.currentStatus / this.maxStatus));
  }

  drawBox(ctx: CanvasRenderingContext2D, colour: string, width: number = this.width): void {
    ctx.fillStyle = colour;
    ctx.fillRect(
      this.position.x - this.drawOffsetX,
      this.position.y - this.drawOffsetY,
      width,
      this.height
    );
  }

  drawBorder(ctx: CanvasRenderingContext2D, lineColour: string, lineWidth: number): void {
    ctx.strokeStyle = lineColour;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(
      this.position.x - this.drawOffsetX,
      this.position.y - this.drawOffsetY,
      this.width,
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

  setLineJoins(lineJoin: CanvasLineJoin): this {
    this.lineJoin = lineJoin;
    return this;
  }

  setBorderWidths(outerBorderWidth: number, innerBorderWidth: number): this {
    this.outerBorderWidth = outerBorderWidth;
    this.innerBorderWidth = innerBorderWidth;
    return this;
  }
}
