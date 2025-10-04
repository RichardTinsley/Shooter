import { SCREEN_SIZES } from "../../constants/screenSizes.js";
import { IDraw } from "../../interfaces/interfaces.js";

export class DSLogo implements IDraw {
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SCREEN_SIZES.SCREEN_WIDTH, SCREEN_SIZES.SCREEN_HEIGHT);

    ctx.drawImage(
      this.dslogo,
      SCREEN_SIZES.SCREEN_WIDTH_HALF - this.dslogo.width / 2,
      SCREEN_SIZES.SCREEN_HEIGHT * 0.55 - this.dslogo.height / 2
    );
  }
}
