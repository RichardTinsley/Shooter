import { SIZES } from "../constants/game.js";
import { drawIntroScreen } from "../GUI/layouts/drawTitleScreen.js";
import { BeginMenu } from "../GUI/menus/BeginMenu.js";
import { Menu } from "../GUI/menus/Menu.js";
import { Screen, IScreenState } from "./Screen.js";

export class BeginningScreen implements IScreenState {
  menu: Menu;

  constructor(public screen: Screen) {
    this.menu = new BeginMenu(screen, SIZES.GAME_HEIGHT - 120);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    drawIntroScreen(ctx);
    this.menu.draw(ctx);
  }
  update(): void {
    this.menu.update();
  }
}
