import { Menu } from "./Menu.js";

export class MainMenu extends Menu {
  protected menuItems: Array<any> = [];

  constructor() {
    super();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
  }

  update(): void {
    super.update();
  }
}
