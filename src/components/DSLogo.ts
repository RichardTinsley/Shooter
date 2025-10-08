import { SCREEN } from "../constants/screenSizes.js";
import { Size } from "../types/types.js";

export class DSLogo {
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    // ctx.drawImage(
    //   this.dslogo
    //   // entity.position.x - this.dslogo.width / 2,
    //   // entity.position.y - this.dslogo.height / 2
    // );
  }

  update(): void {}
  setDrawOffsets(drawOffsets: Size): this {
    return this;
  }
}
