import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/sizes.js";
import { Position } from "../types/position.js";

export class loadingBar {
  private readonly loadBarThickness: number = 14;
  private readonly loadBarLength: number = SIZES.GAME_WIDTH / 3;
  private loadBarMaxWidth = 0;
  private position: Position;
  private assetListLength: number;

  constructor(opts: { position: Position; assetListLength: number }) {
    this.position = opts.position;
    this.position.x -= this.loadBarLength / 2;
    this.assetListLength = opts.assetListLength;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.lineJoin = "bevel";
    ctx.strokeStyle = COLOURS.WHITE;

    ctx.strokeRect(
      this.position.x,
      this.position.y,
      this.loadBarLength,
      this.loadBarThickness
    );

    ctx.fillStyle = COLOURS.WHITE;

    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.loadBarLength * this.loadBarMaxWidth,
      this.loadBarThickness
    );
    ctx.closePath();
  }

  public update(newLength: number): void {
    this.loadBarMaxWidth = newLength / this.assetListLength;
  }
}
