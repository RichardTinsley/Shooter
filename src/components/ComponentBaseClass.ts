import { Size } from "../types/types.js";
import { EntityCoordinates } from "../classes/EntityCoordinates.js";

export abstract class ComponentBaseClass {
  drawOffsetX: number = 0;
  drawOffsetY: number = 0;

  abstract draw(ctx: CanvasRenderingContext2D, coordinates: EntityCoordinates): void;
  abstract update(coordinates: EntityCoordinates): void;

  setDrawOffsets(drawOffsets: Size): this {
    this.drawOffsetX = drawOffsets.width;
    this.drawOffsetY = drawOffsets.height;
    return this;
  }
}
