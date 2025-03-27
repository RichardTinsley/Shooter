import { SIZES } from "../constants/game.js";
import { ScreenFactory } from "../screens/ScreenFactory.js";
import { Scene, State } from "./Scene.js";

export class LoadingComplete implements State {
  screen = ScreenFactory.createLoadingCompleteScene();
  constructor(public scene: Scene) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.screen.draw(ctx);
  }

  update(): void {
    this.screen.update();
  }
}
