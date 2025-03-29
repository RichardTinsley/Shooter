import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Mouse } from "./handlers/Mouse.js";
import { State } from "./states/State.js";

export class Game {
  private state = new State();
  private keyboard = new Keyboard(this.state);
  private mouse = new Mouse(this.state);
  private debug = new Debug(this.state, this.mouse);

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.getCurrentState().draw(ctx);
    this.debug.draw(ctx);
  }

  update(): void {
    this.state.getCurrentState().update();
    this.debug.update();
  }
}
