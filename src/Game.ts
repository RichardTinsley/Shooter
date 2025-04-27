import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Mouse, CURSOR_STYLES } from "./handlers/Mouse.js";
import { Time } from "./handlers/Time.js";
import { Screen } from "./screens/Screen.js";

export class Game {
  private time = new Time();
  private screen = new Screen();
  private mouse = new Mouse();
  private debug = new Debug(this.screen, this.mouse);
  private keyboard = new Keyboard(this.screen, this.debug);

  draw(ctx: CanvasRenderingContext2D): void {
    this.screen.getCurrentState().draw(ctx);
    this.debug.draw(ctx);
  }

  update(): void {
    this.time.update();
    this.screen.getCurrentState().update();
    this.debug.update();
  }
}
