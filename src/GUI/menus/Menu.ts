import { MenuButton } from "./MenuButton.js";

export class Menu {
  protected menuItems: Array<MenuButton> = [];

  constructor() {}

  draw(ctx: CanvasRenderingContext2D): void {
    this.menuItems.forEach((item: MenuButton) => {
      item.draw(ctx);
    });
  }

  update(): void {
    this.menuItems.forEach((item: MenuButton) => {
      item.update();
    });
  }

  getMenuItemsArray(): Array<MenuButton> {
    return this.menuItems;
  }

  // initialiseHorizontallyMenu(index){
  //     return GAME.SIZES.GAME_WIDTH / 3 * (index + 1);
  // }
}
