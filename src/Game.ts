import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Scene } from "./scenes/Scene.js";

export class Game {
  private scene = new Scene();
  private debug = new Debug();
  private keyboard = new Keyboard(this.scene);

  draw(ctx: CanvasRenderingContext2D): void {
    this.scene.getState().draw(ctx);
    this.debug.draw(ctx);
  }

  update(): void {
    this.scene.getState().update();
    this.debug.update();
  }
}
