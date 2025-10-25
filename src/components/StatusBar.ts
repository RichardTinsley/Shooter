import { EntityCoordinates } from "../classes/EntityCoordinates.js";
import { getColour, COLOURS } from "../constants/colours.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class StatusBarComponent extends ComponentBaseClass {
  private currentStatus!: number;
  private maxStatus!: number;
  private statusBarColour: string = getColour(COLOURS.WHITE);

  draw(ctx: CanvasRenderingContext2D, coordinates: EntityCoordinates): void {
    ctx.lineJoin = "round";
    this.drawBorder(ctx, getColour(COLOURS.WHITE), coordinates, coordinates.size.height);
    this.drawBox(ctx, getColour(COLOURS.BLACK), coordinates, coordinates.size.width);
    this.drawBorder(ctx, getColour(COLOURS.BLACK), coordinates, coordinates.size.height / 2);
    this.drawBox(
      ctx,
      this.statusBarColour,
      coordinates,
      coordinates.size.width * (this.currentStatus / this.maxStatus)
    );
  }

  drawBox(
    ctx: CanvasRenderingContext2D,
    colour: string,
    coordinates: EntityCoordinates,
    width: number
  ): void {
    ctx.fillStyle = colour;
    ctx.fillRect(
      coordinates.position.x - coordinates.halfWidth,
      coordinates.position.y - coordinates.size.height,
      width,
      coordinates.size.height
    );
  }

  drawBorder(
    ctx: CanvasRenderingContext2D,
    lineColour: string,
    coordinates: EntityCoordinates,
    lineWidth: number
  ): void {
    ctx.strokeStyle = lineColour;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(
      coordinates.position.x - coordinates.halfWidth,
      coordinates.position.y - coordinates.size.height,
      coordinates.size.width,
      coordinates.size.height
    );
  }

  update(): void {}

  setStatus(currentStatus: number, maxStatus: number): this {
    this.currentStatus = currentStatus;
    this.maxStatus = maxStatus;
    return this;
  }

  setStatusBarColour(colour: string): void {
    this.statusBarColour = colour;
  }

  getCurrentStatus(): number {
    return this.currentStatus;
  }

  increaseCurrentStatus(increment: number): void {
    this.currentStatus += increment;
  }

  decreaseCurrentStatus(decrement: number): void {
    this.currentStatus -= decrement;
  }
}
