import { ScreenFactory } from "../screens/ScreenFactory.js";
import { State, IState } from "./State.js";

export class BeginState implements IState {
  screen = ScreenFactory.createBeginScreen();
  constructor(public state: State) {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.screen.draw(ctx);
  }

  update(): void {
    this.screen.update();
  }
}
