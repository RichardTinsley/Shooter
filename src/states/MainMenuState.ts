import { SIZES } from "../constants/game.js";
import { MainMenu } from "../GUI/MenuMainMenu.js";
import { State, IState } from "./State.js";

export class MainMenuState implements IState {
  menu;

  constructor(public state: State) {
    this.menu = new MainMenu(state, 400);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.menu.draw(ctx);
  }
  update(): void {
    this.menu.update();
  }
}
