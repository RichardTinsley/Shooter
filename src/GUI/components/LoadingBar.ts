import { COLOURS } from "../../constants/colours.js";
import { SIZES } from "../../constants/sizes.js";
import { Position } from "../../constants/types.js";
import { drawRectangle } from "../../utilities/drawShapes.js";
import { StatusBar } from "./StatusBar.js";

export class LoadingBar extends StatusBar {
  readonly statusBarHeight: number = 14;
  readonly statusBarLength: number = SIZES.GAME_WIDTH / 3;

  constructor(protected maxStatus: number) {
    super();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);

    drawRectangle(
      ctx,
      {
        x: this.position.x - this.drawOffsetX,
        y: this.position.y - this.drawOffsetY,
      },
      this.statusBarLength * (this.currentStatus / this.maxStatus),
      this.statusBarHeight,
      COLOURS.WHITE,
      COLOURS.WHITE
    );
  }
}
