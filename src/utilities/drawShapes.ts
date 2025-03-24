import { Position } from "../constants/types.js";

export function drawRectangle(
  ctx: CanvasRenderingContext2D,
  position: Position,
  length: number,
  height: number,
  lineWidth: number,
  fillColour: string,
  strokeColour: string = ""
) {
  if (strokeColour !== "") {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColour;
    ctx.strokeRect(position.x, position.y, length, height);
  }

  ctx.fillStyle = fillColour;
  ctx.fillRect(position.x, position.y, length, height);
}
