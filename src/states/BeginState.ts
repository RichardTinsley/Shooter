import { GUIFactory } from "../GUI/GUIFactory.js";
import { State, IState } from "./State.js";

export class BeginState implements IState {
  gui = GUIFactory.createBeginGUI(this.state);
  constructor(public state: State) {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.gui.draw(ctx);
  }

  update(): void {
    this.gui.update();
  }
}
