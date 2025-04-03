import { Position } from "../constants/types.js";
import { COLOURS } from "../constants/colours.js";

export function drawRectangle(
  ctx: CanvasRenderingContext2D,
  position: Position,
  length: number,
  height: number,
  fillStyle: string,
  strokeStyle: string = COLOURS.NONE
): void {
  if (fillStyle !== COLOURS.NONE) {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(position.x, position.y, length, height);
  }

  if (strokeStyle !== COLOURS.NONE) {
    ctx.strokeStyle = strokeStyle;
    ctx.strokeRect(position.x, position.y, length, height);
  }
}

export function drawDot(
  ctx: CanvasRenderingContext2D,
  item: any,
  colour: string
): void {
  ctx.fillStyle = colour;
  ctx.fillRect(item.x - 2, item.y - 2, 4, 4);
}

export function drawCircleHitbox(
  ctx: CanvasRenderingContext2D,
  item: any,
  drawDot: Function
): void {
  ctx.beginPath();
  ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
  ctx.fillStyle = COLOURS.RED_ALPHA;
  ctx.fill();

  drawDot(ctx, item, COLOURS.RED);
}

export function drawSquareHitBox(
  ctx: CanvasRenderingContext2D,
  item: any
): void {
  ctx.fillStyle = COLOURS.RED_ALPHA;
  ctx.fillRect(item.x, item.y, item.width, item.height);
}

export function drawEntityShadow(
  ctx: CanvasRenderingContext2D,
  position: Position,
  width: number
): void {
  ctx.save();
  ctx.beginPath();
  ctx.translate(position.x, position.y);
  const radialGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, width / 2);
  radialGradient.addColorStop(0, COLOURS.SHADOW);
  radialGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = radialGradient;
  ctx.arc(0, 0, width, 0, 2 * Math.PI, false);
  ctx.transform(1, 0, 0, 0.3, 0, 0);
  ctx.fill();
  ctx.restore();
}

export function drawMouseOverEntity(
  ctx: CanvasRenderingContext2D,
  position: Position,
  radius: number
): void {
  radius /= 2;
  ctx.save();
  ctx.beginPath();
  ctx.translate(position.x, position.y);
  ctx.transform(1, 0, 0, 0.3, 0, 0);
  const radialGradient = ctx.createRadialGradient(
    0,
    0,
    radius - 20,
    0,
    0,
    radius
  );
  radialGradient.addColorStop(0.2, `#00000000`);
  radialGradient.addColorStop(0.6, `${COLOURS.RED_ALPHA}`);
  radialGradient.addColorStop(1, `#00000000`);

  ctx.fillStyle = radialGradient;
  ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.restore();
}
// RED GLOWING RING
// export function drawMouseOverEntity(
//   ctx: CanvasRenderingContext2D,
//   position: Position,
//   radius: number
// ): void {
//   radius /= 2;
//   ctx.save();
//   ctx.beginPath();
//   ctx.translate(position.x, position.y);
//   ctx.transform(1, 0, 0, 0.3, 0, 0);
//   const radialGradient = ctx.createRadialGradient(
//     0,
//     0,
//     radius - 20,
//     0,
//     0,
//     radius
//   );
//   radialGradient.addColorStop(0.2, `#00000000`);
//   radialGradient.addColorStop(0.6, `${COLOURS.RED_ALPHA}`);
//   radialGradient.addColorStop(1, `#00000000`);

//   ctx.fillStyle = radialGradient;
//   ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
//   ctx.fill();
//   ctx.restore();
// }
