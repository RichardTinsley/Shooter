import { Component } from "../classes/Component.js";
import { SCREEN } from "../constants/screenSizes.js";

export class DSLogo extends Component {
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    ctx.drawImage(
      this.dslogo,
      this.position.x - this.dslogo.width / 2,
      this.position.y - this.dslogo.height / 2
    );
  }

  update(): void {}
}
