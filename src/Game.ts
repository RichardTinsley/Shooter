import { Scene } from "./scenes/Scene.js";
import { LoadingScene } from "./scenes/LoadingScene.js";

export class Game {
  private scene: Scene = new LoadingScene();

  constructor() {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.scene.draw(ctx);
  }

  update(): void {
    this.scene.update();
  }
}
