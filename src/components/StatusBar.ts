import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
import { Position } from "../constants/types.js";

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
    ctx.lineWidth = 3;
    ctx.lineJoin = "bevel";

    ctx.fillStyle = COLOURS.BLACK;
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.statusBarLength,
      this.statusBarHeight
    );

    ctx.strokeStyle = COLOURS.WHITE;
    ctx.strokeRect(
      this.position.x,
      this.position.y,
      this.statusBarLength,
      this.statusBarHeight
    );

    ctx.fillStyle = COLOURS.WHITE;
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.statusBarLength * (this.currentStatus / this.maxStatus),
      this.statusBarHeight
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
