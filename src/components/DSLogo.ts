import { Coordinates } from "../classes/Coordinates.js";
import { SCREEN } from "../../src/constants/screenSizes.js";
import { IEntityComponent } from "../../src/interfaces/interfaces.js";

export class DSLogo implements IEntityComponent {
  private dslogo = document.getElementById("dslogo") as HTMLImageElement;

  draw(ctx: CanvasRenderingContext2D, coordinates: Coordinates): void {
    ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    ctx.drawImage(
      this.dslogo,
      coordinates.position.x - this.dslogo.width / 2,
      coordinates.position.y - this.dslogo.height / 2
    );
  }
  update(coordinates: Coordinates): void {
    throw new Error("Method not implemented.");
  }
}
