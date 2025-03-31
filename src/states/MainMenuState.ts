import { SIZES } from "../constants/game.js";
import { MenuTemplate } from "../constants/types.js";
import { Menu } from "../GUI/Menu.js";
import { LABELS } from "../GUI/MenuLabelBuilder.js";
import { MenuVertical } from "../GUI/MenuVertical.js";
import { State, IState } from "./State.js";

export class MainMenuState implements IState {
  private menuTemplate: Array<MenuTemplate> = [
    { state: this.state.setNewGameState, label: LABELS.NEWGAME },
    { state: this.state.setOptionsState, label: LABELS.OPTIONS },
    { state: this.state.setAboutState, label: LABELS.ABOUT },
  ];

  menu: Menu;

  constructor(public state: State) {
    this.menu = new MenuVertical(state, this.menuTemplate, 400);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.menu.draw(ctx);
  }
  update(): void {
    this.menu.update();
  }
}
