import { EntityInformation } from "../types/types.js";

export abstract class ComponentBaseClass {
  protected drawOffsetX: number = 0;
  protected drawOffsetY: number = 0;
  abstract draw(ctx: CanvasRenderingContext2D, coordinates: EntityInformation): void;
  abstract update(coordinates: EntityInformation): void;

  setDrawOffsets(offsetX: number, offsetY: number): this {
    this.drawOffsetX = offsetX;
    this.drawOffsetY = offsetY;
    return this;
  }
}
