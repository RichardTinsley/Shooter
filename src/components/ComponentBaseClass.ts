import { Information } from "../types/types.js";

export abstract class ComponentBaseClass {
  protected drawOffsetX: number = 0;
  protected drawOffsetY: number = 0;

  draw(ctx: CanvasRenderingContext2D, information: Information): void {
    return;
  }

  update(information: Information): void {
    return;
  }

  setDrawOffsets(offsetX: number, offsetY: number): this {
    this.drawOffsetX = offsetX;
    this.drawOffsetY = offsetY;
    return this;
  }
}
