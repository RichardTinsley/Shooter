import { SCREEN_SIZES } from "../constants/screenSizes.js";

export function context(): CanvasRenderingContext2D {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.imageSmoothingEnabled = false;
  canvas.width = SCREEN_SIZES.SCREEN_WIDTH;
  canvas.height = SCREEN_SIZES.SCREEN_HEIGHT;

  return ctx;
}
