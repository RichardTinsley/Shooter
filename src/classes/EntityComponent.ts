import { Size } from "../types/types.js";
import { EntityCoordinates } from "./EntityCoordinates.js";

export abstract class EntityComponent {
  visual!: HTMLImageElement | Text;
  drawOffsetX: number = 0;
  drawOffsetY: number = 0;

  abstract draw(ctx: CanvasRenderingContext2D, coordinates: EntityCoordinates): void;
  abstract update(coordinates: EntityCoordinates): void;

  setVisual(visual: HTMLImageElement | Text): this {
    this.visual = visual;
    return this;
  }

  setDrawOffsets(drawOffsets: Size): this {
    this.drawOffsetX = drawOffsets.width;
    this.drawOffsetY = drawOffsets.height;
    return this;
  }
}
