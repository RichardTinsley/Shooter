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

  constructor() {}

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

  update(event: number): void {
    return;
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

  setMaxStatus(maxStatus: number): this {
    this.maxStatus = maxStatus;
    return this;
  }
}
