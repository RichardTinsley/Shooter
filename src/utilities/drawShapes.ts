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

export function drawDashedCircle(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  // ctx.arc(this.center.x, this.center.y, this.towerRange.radius, 0, Math.PI * 2);
  ctx.setLineDash([5, 15]);
  ctx.lineWidth = 2;
  ctx.strokeStyle = COLOURS.WHITE;
  ctx.stroke();
  ctx.setLineDash([0, 0]);
  ctx.closePath();
}

export function drawShadow(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  // ctx.ellipse(this.position.x, this.position.y, this.shadowHeight, this.quarterWidth, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fillStyle = COLOURS.SHADOW;
  ctx.fill();
}
