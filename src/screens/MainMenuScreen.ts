import { SIZES } from "../constants/game.js";
import { MainMenu } from "../GUI/menus/MainMenu.js";
import { Screen, IScreenState } from "./Screen.js";

export class MainMenuScreen implements IScreenState {
  menu;

  constructor(public screen: Screen) {
    this.menu = new MainMenu(screen, 400);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.menu.draw(ctx);
  }
  update(): void {
    this.menu.update();
  }

  getArray(): Array<any> {
    return this.menu.getMenuItemsArray();
  }
}
