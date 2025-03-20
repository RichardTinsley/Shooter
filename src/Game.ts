import { Scene } from "./scenes/Scene.js";
import { LoadingScene } from "./scenes/LoadingScene.js";

export class Game {
  private scene: Scene = new LoadingScene();

  public constructor() {}

  public draw(ctx: CanvasRenderingContext2D): void {
    this.scene.draw(ctx);
  }

  public update(): void {}
}
