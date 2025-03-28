import { MenuButton } from "../components/MenuButton.js";
import { State } from "../states/State.js";

export class GUI {
  protected menu: Array<MenuButton> = [];

  constructor(public state: State) {
    this.initialiseMenu(state);
  }

  draw(ctx: CanvasRenderingContext2D): void {
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
