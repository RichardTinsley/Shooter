import { MenuButton } from "../components/MenuButton.js";

export class Screen {
  protected menu: Array<MenuButton> = [];

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
}
