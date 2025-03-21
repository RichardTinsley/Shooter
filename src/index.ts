import { context } from "./utilities/context.js";
import { Game } from "./Game.js";

const ctx: CanvasRenderingContext2D = context();

class Main {
  private Game: Game = new Game();

  public constructor() {
    requestAnimationFrame(this.frame);
  }

  private frame = (time: number): void => {
    this.Game.draw(ctx);
    this.Game.update();
    requestAnimationFrame(this.frame);
  };
}

window.addEventListener("load", () => {
  new Main();
  document.getElementById("positioning")?.remove();
});
