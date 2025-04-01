import { SIZES } from "../constants/game.js";
import { MainMenu } from "../GUI/menus/MainMenu.js";
import { State, IState } from "./State.js";

export class MainMenuState implements IState {
  menu;

  constructor(public state: State) {
    this.menu = new MainMenu(state, 400);
    console.log(this.menu);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.menu.draw(ctx);
  }
  update(): void {
    this.menu.update();
  }
}
