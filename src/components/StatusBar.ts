import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
import { Position } from "../constants/types.js";
import { drawRectangle } from "../utilities/drawShapes.js";

export class StatusBar {
  private readonly statusBarHeight: number = 14;
  private readonly statusBarLength: number = SIZES.GAME_WIDTH / 3;
  private currentStatus: number = 0;
  private maxStatus: number = 0;

  constructor(private position: Position) {
    this.position.x -= this.statusBarLength / 2;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.lineJoin = "bevel";

    drawRectangle(
      ctx,
      this.position,
      this.statusBarLength,
      this.statusBarHeight,
      5,
      COLOURS.BLACK,
      COLOURS.WHITE
    );

    drawRectangle(
      ctx,
      this.position,
      this.statusBarLength * (this.currentStatus / this.maxStatus),
      this.statusBarHeight,
      5,
      COLOURS.WHITE,
      COLOURS.WHITE
    );

    ctx.closePath();
  }

  setCurrentStatus(currentStatus: number): void {
    this.currentStatus += currentStatus;
  }

  setMaxStatus(maxStatus: number): this {
    this.maxStatus = maxStatus;
    return this;
  }
}
