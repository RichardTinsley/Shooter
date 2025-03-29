import { GUI } from "./GUI.js";
import { State } from "../states/State.js";
import { LABELS } from "./components/MenuButton.js";
import { MenuTemplate } from "../constants/types.js";

export class MainMenuGUI extends GUI {
  private menuTemplate: Array<MenuTemplate> = [
    { state: this.state.setNewGameState, label: LABELS.NEWGAME },
    { state: this.state.setOptionsState, label: LABELS.OPTIONS },
    { state: this.state.setAboutState, label: LABELS.ABOUT },
  ];
  constructor(public state: State) {
    super(state);
    this.menu = this.initialiseVerticalMenu(this.menuTemplate, 400);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
  }
  update(): void {
    super.update();
  }
}
