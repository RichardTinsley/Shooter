import { COLOURS } from "../../constants/colours.js";
import { SIZES } from "../../constants/game.js";
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
      this.position,
      this.statusBarLength * (this.currentStatus / this.maxStatus),
      this.statusBarHeight,
      COLOURS.WHITE,
      COLOURS.WHITE
    );
  }
  setPosition(position: Position): this {
    super.setPosition(position);
    this.position.x -= this.statusBarLength / 2;
    return this;
  }
}
