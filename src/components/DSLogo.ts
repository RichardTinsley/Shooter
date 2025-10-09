import { EntityCoordinates } from "../classes/EntityCoordinates.js";
import { EntityComponent } from "../classes/EntityComponent.js";
import { SCREEN } from "../constants/screenSizes.js";

export class DSLogo extends EntityComponent {
  visual!: HTMLImageElement;

  draw(ctx: CanvasRenderingContext2D, coordinates: EntityCoordinates): void {
    ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    ctx.drawImage(
      this.visual,
      coordinates.position.x + this.drawOffsetX,
      coordinates.position.y + this.drawOffsetY
    );
  }

  update(coordinates: EntityCoordinates): void {
    return;
  }
}
