// import { Debug } from "./handlers/Debug.js";
// import { Keyboard } from "./handlers/Keyboard.js";
// import { Mouse } from "./handlers/Mouse.js";
// import { Time } from "./handlers/Time.js";
// import { createGameFSM } from "./FSM/GameStates.js";
import { IRender } from "./interfaces/interfaces.js";
import { GameState } from "./handlers/GameState.js";

export class Game implements IRender {
  // private time = new Time();
  private screen = new GameState();
  // private gameFSM = createGameFSM();
  // private debug = new Debug(this.screen);
  // private mouse = new Mouse();
  // private keyboard = new Keyboard(this.screen, this.debug);

  draw(ctx: CanvasRenderingContext2D): void {
    this.screen.draw(ctx);
    // this.gameFSM.draw(ctx);
    // this.debug.draw(ctx);
  }

  update(): void {
    // this.time.update();
    this.screen.update();
    // this.debug.update();
    // this.mouse.update();
  }
}
