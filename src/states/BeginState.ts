import { SIZES } from "../constants/game.js";
import { drawIntroScreen } from "../GUI/layouts/drawTitleScreen.js";
import { BeginMenu } from "../GUI/menus/BeginMenu.js";
import { Menu } from "../GUI/menus/Menu.js";
import { State, IState } from "./State.js";

export class BeginState implements IState {
  menu: Menu;

  constructor(public state: State) {
    this.menu = new BeginMenu(state, SIZES.GAME_HEIGHT - 120);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    drawIntroScreen(ctx);
    this.menu.draw(ctx);
  }
  update(): void {
    this.menu.update();
  }
}
