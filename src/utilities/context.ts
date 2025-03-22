import { SIZES } from "../constants/game.js";

export function context() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D; //MIGHT REMOVE AS;
  ctx.imageSmoothingEnabled = false;
  canvas.width = SIZES.GAME_WIDTH;
  canvas.height = SIZES.GAME_HEIGHT;

  return ctx;
}
