import { Debug } from "./handlers/Debug.js";
import { Scene } from "./scenes/Scene.js";

export class Game {
  private scene = new Scene();
  private debug = new Debug();

  constructor() {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.scene.getCurrentState().draw(ctx);
    this.debug.draw(ctx);
  }

  update(): void {
    this.scene.getCurrentState().update();
    this.debug.update();
  }
}
