import { SceneBase } from "./scenes/SceneBase.js";
import { LoadingScene } from "./scenes/LoadingScene.js";

export class Game {
  private scene: SceneBase = new LoadingScene();

  constructor() {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.scene.draw(ctx);
  }

  update(): void {
    this.scene.update();
  }
}
