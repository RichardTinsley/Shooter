import { LoadingState } from "./states/LoadingState.js";

export class Game {
  private state = new LoadingState();

  constructor() {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.state.draw(ctx);
  }

  update(): void {
    this.state.update();
  }
}
