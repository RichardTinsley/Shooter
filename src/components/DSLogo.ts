import { Component } from "../classes/Component.js";
import { SCREEN_SIZES } from "../constants/screenSizes.js";

export class DSLogo extends Component {
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SCREEN_SIZES.SCREEN_WIDTH, SCREEN_SIZES.SCREEN_HEIGHT);
    ctx.drawImage(
      this.dslogo,
      this.position.x - this.dslogo.width / 2,
      this.position.y - this.dslogo.height / 2
    );
  }

  update(): void {}
}
