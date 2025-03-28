import { GUI } from "../GUI/GUI.js";
import { GUIFactory } from "../GUI/GUIFactory.js";
import { MainMenuGUI } from "../GUI/MainMenuGUI.js";
import { State, IState } from "./State.js";

export class MainMenuState implements IState {
  gui = new MainMenuGUI(this.state);
  constructor(public state: State) {}

  draw(ctx: CanvasRenderingContext2D): void {
    // this.gui.draw(ctx);
    console.log("MAINMENUSTATE");
  }

  update(): void {
    // this.gui.update();
  }
}
