import { Debug } from "./handlers/Debug.js";

export class Game {
  private state = new StateLoading();
  private debug = new Debug();

  constructor() {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.draw(ctx);
    this.debug.draw(ctx);
  }

  update(): void {
    this.state.update();
    this.debug.update();
  }
}
