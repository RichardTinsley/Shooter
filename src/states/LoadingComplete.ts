import { ScreenFactory } from "../screens/ScreenFactory.js";
import { State, IState } from "./State.js";

export class LoadingComplete implements IState {
  screen = ScreenFactory.createLoadingCompleteScreen();
  constructor(public state: State) {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.screen.draw(ctx);
  }

  update(): void {
    this.screen.update();
  }

  mouseOver() {
    throw new Error("Method not implemented.");
  }
}
