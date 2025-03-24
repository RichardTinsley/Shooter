import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
import { Position } from "../constants/types.js";
import { drawRectangle } from "../utilities/drawShapes.js";
import { StatusBar } from "./StatusBar.js";

export class LoadingBar extends StatusBar {
  protected readonly statusBarHeight: number = 14;
  protected readonly statusBarLength: number = SIZES.GAME_WIDTH / 3;

  constructor(protected position: Position) {
    super(position);
    this.position.x -= this.statusBarLength / 2;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);

    drawRectangle(
      ctx,
      this.position,
      this.statusBarLength * (this.currentStatus / this.maxStatus),
      this.statusBarHeight,
      COLOURS.WHITE,
      COLOURS.WHITE
    );
  }
}
