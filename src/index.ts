import { context } from "./utilities/context.js";
import { Game } from "./Game.js";

const ctx: CanvasRenderingContext2D = context();

class Main {
  private game: Game = new Game();

  constructor() {
    requestAnimationFrame(this.frame);
  }

  private frame = (time: number): void => {
    this.game.draw(ctx);
    this.game.update(time);
    requestAnimationFrame(this.frame);
  };
}

window.addEventListener("load", () => {
  new Main();
  document.getElementById("positioning")?.remove();
});
