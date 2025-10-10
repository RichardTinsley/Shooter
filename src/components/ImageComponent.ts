import { EntityCoordinates } from "../classes/EntityCoordinates.js";
import { EntityComponent } from "../classes/EntityComponent.js";
import { SCREEN } from "../constants/screenSizes.js";

export class ImageComponent extends EntityComponent {
  private image!: HTMLImageElement;
  private currentFrame: number = 0;
  private currentRow: number = 0;
  private direction: number = 1;

  draw(ctx: CanvasRenderingContext2D, coordinates: EntityCoordinates): void {
    ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    // ctx.drawImage(
    //   this.visual,
    //   coordinates.position.x + this.drawOffsetX,
    //   coordinates.position.y + this.drawOffsetY
    // );

    ctx.save();
    ctx.translate(coordinates.position.x, coordinates.position.y);
    ctx.scale(this.direction, 1);

    ctx.drawImage(
      this.image,
      coordinates.size.width * this.currentFrame,
      coordinates.size.height * this.currentRow,
      coordinates.size.width,
      coordinates.size.height,
      0 - coordinates.halfWidth + this.drawOffsetX,
      0 - coordinates.scaleSize.height + this.drawOffsetY,
      coordinates.scaleSize.width,
      coordinates.scaleSize.height
    );

    ctx.restore();
  }

  update(coordinates: EntityCoordinates): void {
    return;
  }
}
