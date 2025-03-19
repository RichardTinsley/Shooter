import { context } from "./utilities/context.js";
import { Game } from "./Game.js";

const ctx: CanvasRenderingContext2D = context();

class Main {
  private Game: Game;

  constructor() {
    this.Game = new Game();
    requestAnimationFrame(this.frame);
  }

  frame = (time: number) => {
    this.Game.draw(ctx);
    this.Game.update();
    requestAnimationFrame(this.frame);
  };
}

window.addEventListener("load", () => {
  new Main();
});
