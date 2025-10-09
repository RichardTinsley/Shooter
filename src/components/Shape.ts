import { COLOURS, getColour } from "../../src/constants/colours.js";

export const JOINS: Record<string, CanvasLineJoin> = {
  round: "round",
  bevel: "bevel",
  miter: "miter",
};

export class Shape {
  protected lineJoin = JOINS.bevel;
  protected strokeWidth: number = 1;
  protected strokeColour: string = getColour(COLOURS.WHITE);
  protected fillColour: string = getColour(COLOURS.BLACK);

  draw(ctx: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }
  update(): void {
    throw new Error("Method not implemented.");
  }

  setLineJoins(lineJoin: CanvasLineJoin): this {
    this.lineJoin = lineJoin;
    return this;
  }

  setStrokeWidth(strokeWidth: number): this {
    this.strokeWidth = strokeWidth;
    return this;
  }

  setStrokeColour(strokeColour: string): this {
    this.strokeColour = strokeColour;
    return this;
  }

  setFillColour(fillColour: string): this {
    this.fillColour = fillColour;
    return this;
  }
}
