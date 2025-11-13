import { COLOURS, getColour } from "../constants/colours.js";
import { StatusType, VisualType } from "../types/entities.js";
import { Entity } from "./Entity.js";

export default class StatusBar extends Entity {
  protected information!: VisualType & StatusType;
  constructor() {
    super();
    this.information.colour = getColour(COLOURS.WHITE);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineJoin = "round";
    const statusBarWidth =
      this.information.scaledSize.width *
      (this.information.currentStatus / this.information.maxStatus);
    this.drawBorder(
      ctx,
      this.information,
      getColour(COLOURS.WHITE),
      this.information.scaledSize.height
    );
    this.drawBox(
      ctx,
      this.information,
      getColour(COLOURS.BLACK),
      this.information.scaledSize.width
    );
    this.drawBorder(ctx, this.information, getColour(COLOURS.BLACK), this.information.halfHeight);
    this.drawBox(ctx, this.information, this.information.statusBarColour, statusBarWidth);
  }

  drawBox(
    ctx: CanvasRenderingContext2D,
    information: Information,
    colour: string,
    width: number
  ): void {
    ctx.fillStyle = colour;
    ctx.fillRect(
      information.position.x - information.halfWidth,
      information.position.y - information.scaledSize.height,
      width,
      information.scaledSize.height
    );
  }

  drawBorder(
    ctx: CanvasRenderingContext2D,
    information: Information,
    colour: string,
    width: number
  ): void {
    ctx.strokeStyle = colour;
    ctx.lineWidth = width;
    ctx.strokeRect(
      information.position.x - information.halfWidth,
      information.position.y - information.scaledSize.height,
      information.scaledSize.width,
      information.scaledSize.height
    );
  }
}
