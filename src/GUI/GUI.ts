import { MenuButton } from "../components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { State } from "../states/State.js";

export class GUI {
  protected menu: Array<MenuButton> = [];

  constructor(public state: State) {
    this.initialiseMenu(state);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.menu.forEach((item: any) => {
      item.draw(ctx);
    });
  }
  update(): void {
    this.menu.forEach((item: any) => {
      item.update();
    });
  }

  getMenu(): Array<MenuButton> {
    return this.menu;
  }

  initialiseMenu(state: State) {
    return;
  }
}
