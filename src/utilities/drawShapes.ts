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

export function drawEntityShadow(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  // ctx.ellipse(this.position.x, this.position.y, this.shadowHeight, this.quarterWidth, Math.PI / 2, 0, 2 * Math.PI);
  ctx.fillStyle = COLOURS.SHADOW;
  ctx.fill();
}

export function drawCircleRadialGradient(ctx: CanvasRenderingContext2D) {
  const radialGradient = ctx.createRadialGradient(200, 200, 50, 200, 200, 10);
  radialGradient.addColorStop(0, "tomato");
  radialGradient.addColorStop(1, "purple");

  ctx.fillStyle = radialGradient;
  ctx.beginPath();
  ctx.arc(250, 150, 80, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

// export function drawTowerSelection(ctx){
//     ctx.beginPath();
//     ctx.ellipse(this.position.x, this.position.y, this.width / 4, this.width / 2, Math.PI / 2, 0, 2 * Math.PI);
//     ctx.lineWidth = 3;
//     ctx.strokeStyle = INTERFACE.COLOURS.GREEN;
//     ctx.stroke();
// }
