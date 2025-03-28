import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Mouse } from "./handlers/Mouse.js";
import { State } from "./states/State.js";

export class Game {
  private state = new State();
  private debug = new Debug();
  private keyboard = new Keyboard(this.state);
  private mouse = new Mouse(this.state);

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.getState().draw(ctx);
    this.debug.draw(ctx);
  }

  update(): void {
    this.state.getState().update();
    this.debug.update();
  }
}
