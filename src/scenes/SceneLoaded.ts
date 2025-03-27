import { SIZES } from "../constants/game.js";
import { Scene, State } from "./Scene.js";

export class SceneLoaded implements State {
  constructor(public scene: Scene) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.scene.menu.draw(ctx);
  }

  update(): void {
    this.scene.menu.update();
  }

  loadingScene() {
    return;
  }

  loadedScene() {
    return;
  }
}
