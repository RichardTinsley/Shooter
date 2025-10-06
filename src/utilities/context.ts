import { SCREEN } from "../constants/screenSizes.js";

export function context(): CanvasRenderingContext2D {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.imageSmoothingEnabled = false;
  canvas.width = SCREEN.WIDTH;
  canvas.height = SCREEN.HEIGHT;

  return ctx;
}
