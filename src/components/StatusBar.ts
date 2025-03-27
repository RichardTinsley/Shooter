import { COLOURS } from "../constants/colours.js";
import { Position } from "../constants/types.js";
import { drawRectangle } from "../utilities/drawShapes.js";

export class StatusBar {
  protected readonly statusBarHeight: number = 0;
  protected readonly statusBarLength: number = 0;
  protected currentStatus: number = 0;
  protected maxStatus: number = 0;

  protected lineJoin: CanvasLineJoin = "bevel";
  protected lineWidth: number = 4;
  protected backgroundFillColour: string = COLOURS.BLACK;
  protected backgroundStrokeColour: string = COLOURS.WHITE;

  constructor(protected position: Position) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineJoin = this.lineJoin;
    ctx.lineWidth = this.lineWidth;

    drawRectangle(
      ctx,
      this.position,
      this.statusBarLength,
      this.statusBarHeight,
      this.backgroundFillColour,
      this.backgroundStrokeColour
    );
  }

  getCurrentStatus(): number {
    return this.currentStatus;
  }

  setCurrentStatus(currentStatus: number): void {
    this.currentStatus += currentStatus;
  }

  setMaxStatus(maxStatus: number): this {
    this.maxStatus = maxStatus;
    return this;
  }
}
