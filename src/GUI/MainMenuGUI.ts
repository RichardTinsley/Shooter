import { GUI } from "./GUI.js";
import { State } from "../states/State.js";

export class MainMenuGUI extends GUI {
  constructor(public state: State) {
    super(state);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    console.log("MENUGUI!!!");
  }
  update(): void {
    super.update();
  }

  initialiseMenu() {}
}
