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

export function drawDot(
  ctx: CanvasRenderingContext2D,
  item: any,
  colour: string
) {
  ctx.fillStyle = colour;
  ctx.fillRect(item.x - 2, item.y - 2, 4, 4);
}

export function drawCircleHitbox(
  ctx: CanvasRenderingContext2D,
  item: any,
  drawDot: Function
) {
  ctx.beginPath();
  ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
  ctx.fillStyle = COLOURS.RED_ALPHA;
  ctx.fill();

  drawDot(ctx, item, COLOURS.RED);
}

export function drawSquareHitBox(ctx: CanvasRenderingContext2D, item: any) {
  ctx.fillStyle = COLOURS.RED_ALPHA;
  ctx.fillRect(item.x, item.y, item.width, item.height);
}

//COMBINE GRADIENT AND ELLIPSE FOR ENEMY AND TOWER SELECTION
//MAKE THIS A CLASS?
export function drawEllipse(
  ctx: CanvasRenderingContext2D,
  position: Position,
  height: number,
  width: number,
  fillStyle: string
) {
  ctx.beginPath();
  ctx.ellipse(
    position.x,
    position.y,
    height,
    width,
    Math.PI / 2,
    0,
    2 * Math.PI
  );
  ctx.fillStyle = fillStyle;
  ctx.lineWidth = 3;
  ctx.strokeStyle = COLOURS.GREEN;
  ctx.fill();
  ctx.stroke();
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
