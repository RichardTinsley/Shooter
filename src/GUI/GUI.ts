import { MenuButton } from "./components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { State } from "../states/State.js";
import { TextFactory } from "../texts/TextFactory.js";

export class GUI {
  protected menu: Array<MenuButton> = [];

  constructor(public state: State) {}

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

  initialiseVerticalMenu(menu: any, menuPosition: number): Array<MenuButton> {
    const newMenu: Array<MenuButton> = [];

    menu.forEach((item: any, index: number) => {
      newMenu.push(
        new MenuButton(
          TextFactory.createMenuItemGlow(),
          this.state,
          item.state,
          item.label
        ).setPosition(
          SIZES.GAME_WIDTH_HALF,
          menuPosition + index * (SIZES.TEXT_MENUITEM + SIZES.TEXT_SPACING)
        )
      );
    });

    return newMenu;
  }

  // initialiseHorizontallyMenu(index){
  //     return GAME.SIZES.GAME_WIDTH / 3 * (index + 1);
  // }
}
