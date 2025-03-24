import { Position } from "../constants/types.js";
import { COLOURS } from "../constants/colours.js";

export function drawRectangle(
  ctx: CanvasRenderingContext2D,
  position: Position,
  length: number,
  height: number,
  fillStyle: string,
  strokeStyle: string = COLOURS.NONE
) {
  if (strokeStyle !== COLOURS.NONE) {
    ctx.strokeStyle = strokeStyle;
    ctx.strokeRect(position.x, position.y, length, height);
  }

  if (fillStyle !== COLOURS.NONE) {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(position.x, position.y, length, height);
  }
}
