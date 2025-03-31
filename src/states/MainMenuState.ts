import { GUIFactory } from "../GUI/GUIFactory.js";
import { State, IState } from "./State.js";

export class MainMenuState implements IState {
  gui = GUIFactory.createMainMenuGUI(this.state);

  constructor(public state: State) {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.gui.draw(ctx);
  }

  update(event: { update: boolean; delta: number }): void {
    this.gui.update(event);
  }
}
