import { Debug } from "./handlers/Debug.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Mouse } from "./handlers/Mouse.js";
import { Time } from "./handlers/Time.js";
import { Screen } from "./screens/Screen.js";

export class Game {
  private time = new Time();
  private screen = new Screen();
  private debug = new Debug(this.screen);
  private mouse = new Mouse();
  private keyboard = new Keyboard(this.screen, this.debug);

  draw(ctx: CanvasRenderingContext2D): void {
    this.screen.draw(ctx);
    this.debug.draw(ctx);
  }

  update(): void {
    this.time.update();
    this.screen.update();
    this.debug.update();
    this.mouse.update();
  }
}
