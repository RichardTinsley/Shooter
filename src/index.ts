import { context } from "./utilities/context.js";
import { Game } from "./Game.js";
import { Time } from "./handlers/Time.js";

const ctx: CanvasRenderingContext2D = context();

class Main {
  private time: Time = Time.create();
  private game: Game = new Game();

  constructor() {
    requestAnimationFrame(this.frame);
  }

  private frame = (time: number): void => {
    this.game.draw(ctx);
    this.game.update(Time.update(time));
    requestAnimationFrame(this.frame);
  };
}

window.addEventListener("load", () => {
  new Main();
  document.getElementById("positioning")?.remove();
});
