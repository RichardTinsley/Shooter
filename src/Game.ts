import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Mouse } from "./handlers/Mouse.js";
import { State } from "./states/State.js";

export class Game {
  private state = new State();
  private mouse = new Mouse(this.state);
  private debug = new Debug(this.state, this.mouse);
  private keyboard = new Keyboard(this.state, this.debug);

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.getCurrentState().draw(ctx);
    this.debug.draw(ctx);
  }

  update(event: { update: boolean; delta: number }): void {
    this.state.getCurrentState().update(event);
    this.debug.update();
  }
}
