import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
import { Position } from "../constants/types.js";

export class LoadingBar {
  private readonly loadBarHeight: number = 14;
  private readonly loadBarLength: number = SIZES.GAME_WIDTH / 3;
  private loadBar: number = 0;
  private assetsLoaded: number = 0;

  constructor(private position: Position, private assetListLength: number) {
    this.position.x -= this.loadBarLength / 2;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.lineJoin = "bevel";
    ctx.strokeStyle = COLOURS.WHITE;

    ctx.strokeRect(
      this.position.x,
      this.position.y,
      this.loadBarLength,
      this.loadBarHeight
    );

    ctx.fillStyle = COLOURS.WHITE;

    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.loadBarLength * this.loadBar,
      this.loadBarHeight
    );
    ctx.closePath();
  }

  setAssetsLoaded(): void {
    this.assetsLoaded++;
    this.loadBar = this.assetsLoaded / this.assetListLength;
  }
}
