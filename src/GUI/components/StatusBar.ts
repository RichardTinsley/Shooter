import { COLOURS } from "../../constants/colours.js";
import { Position } from "../../constants/types.js";
import { IDrawable } from "../../interfaces/IEntity.js";
import { drawRectangle } from "../../utilities/drawShapes.js";

export class StatusBar implements IDrawable {
  protected readonly statusBarHeight: number = 0;
  protected readonly statusBarLength: number = 0;
  protected currentStatus: number = 0;
  protected maxStatus: number = 0;

  protected lineJoin: CanvasLineJoin = "bevel";
  protected lineWidth: number = 4;
  protected backgroundFillColour: string = COLOURS.BLACK;
  protected backgroundStrokeColour: string = COLOURS.WHITE;
  position!: Position;

  protected drawOffsetX!: number;
  protected drawOffsetY!: number;

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineJoin = this.lineJoin;
    ctx.lineWidth = this.lineWidth;

    drawRectangle(
      ctx,
      {
        x: this.position.x - this.drawOffsetX,
        y: this.position.y - this.drawOffsetY,
      },
      this.statusBarLength,
      this.statusBarHeight,
      this.backgroundFillColour,
      this.backgroundStrokeColour
    );
  }

  setPosition(position: Position): this {
    this.position = { ...position };
    return this;
  }

  getPosition(): Position {
    return this.position;
  }

  getCurrentStatus(): number {
    return this.currentStatus;
  }

  setCurrentStatus(currentStatus: number): void {
    this.currentStatus += currentStatus;
  }

  setDrawOffsets(
    offsetY: number,
    offsetX: number = this.statusBarLength / 2
  ): this {
    this.drawOffsetX = offsetX;
    this.drawOffsetY = offsetY;
    return this;
  }
}
