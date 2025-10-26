import { getColour, COLOURS } from "../constants/colours.js";
import { EntityInformation } from "../types/types.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class StatusBarComponent extends ComponentBaseClass {
  private statusBarColour: string = getColour(COLOURS.WHITE);

  draw(ctx: CanvasRenderingContext2D, coordinates: EntityInformation): void {
    ctx.lineJoin = "round";
    this.drawBorder(ctx, getColour(COLOURS.WHITE), coordinates, coordinates.size.height);
    this.drawBox(ctx, getColour(COLOURS.BLACK), coordinates, coordinates.size.width);
    this.drawBorder(ctx, getColour(COLOURS.BLACK), coordinates, coordinates.size.height / 2);
    this.drawBox(
      ctx,
      this.statusBarColour,
      coordinates,
      coordinates.size.width * (coordinates.currentStatus / coordinates.maxStatus)
    );
  }

  drawBox(
    ctx: CanvasRenderingContext2D,
    colour: string,
    coordinates: EntityInformation,
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
    coordinates: EntityInformation,
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

  setStatusBarColour(colour: string): void {
    this.statusBarColour = colour;
  }
}
