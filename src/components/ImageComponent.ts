import { EntityCoordinates } from "../classes/EntityCoordinates.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class ImageComponent extends ComponentBaseClass {
  private image!: HTMLImageElement;
  private currentFrame: number = 0;
  private currentRow: number = 0;
  private direction: number = 1;

  draw(ctx: CanvasRenderingContext2D, coordinates: EntityCoordinates): void {
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

  setImage(image: HTMLImageElement): this {
    this.image = image;
    return this;
  }
}
