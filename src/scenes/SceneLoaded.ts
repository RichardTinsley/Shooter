import { SIZES } from "../constants/game.js";
import { LoadedScreen } from "../screens/LoadedScreen.js";
import { Scene, State } from "./Scene.js";

export class SceneLoaded implements State {
  constructor(public scene: Scene) {
    // this.scene.screen = new LoadedScreen();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.scene.screen.draw(ctx);
  }

  update(): void {
    this.scene.screen.update();
  }
}
