import { SIZES } from "../constants/game.js";
import { drawIntroScreen } from "../GUI/layouts/drawTitleScreen.js";
import { Menu } from "../GUI/Menu.js";
import { MenuVertical } from "../GUI/MenuVertical.js";
import { State, IState } from "./State.js";

export class BeginState implements IState {
  menu: Menu;

  constructor(public state: State) {
    this.menu = new MenuVertical(state, SIZES.GAME_HEIGHT - 120);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    drawIntroScreen(ctx);
    this.menu.draw(ctx);
  }
  update(): void {
    this.menu.update();
  }
}
