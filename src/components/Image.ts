import { EntityInformation } from "../types/types.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class ImageComponent extends ComponentBaseClass {
  protected image!: HTMLImageElement;
  protected currentFrame: number = 0;
  protected currentRow: number = 0;
  protected direction: number = 1;

  draw(ctx: CanvasRenderingContext2D, coordinates: EntityInformation): void {
    ctx.save();
    ctx.translate(coordinates.position.x, coordinates.position.y);
    ctx.scale(this.direction, 1);

    ctx.drawImage(
      this.image,
      coordinates.size.width * this.currentFrame,
      coordinates.size.height * this.currentRow,
      coordinates.size.width,
      coordinates.size.height,
      0 - coordinates.halfWidth + coordinates.drawOffsetX,
      0 - coordinates.scaledSize.height + coordinates.drawOffsetY,
      coordinates.scaledSize.width,
      coordinates.scaledSize.height
    );

    ctx.restore();
  }

  update(coordinates: EntityInformation): void {
    return;
  }

  setImage(image: HTMLImageElement): this {
    this.image = image;
    return this;
  }
}
