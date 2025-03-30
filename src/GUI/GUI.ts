import { MenuButton } from "./components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { State } from "../states/State.js";
import { TextFactory } from "../entities/texts/TextFactory.js";
import { MenuTemplate } from "../constants/types.js";

export class GUI {
  protected menu: Array<MenuButton> = [];
  protected entities: Array<any> = [];

  constructor(public state: State) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
    this.menu.forEach((item: MenuButton) => {
      item.draw(ctx);
    });
  }

  update(): void {
    this.menu.forEach((item: MenuButton) => {
      item.update();
    });
  }

  getMenu(): Array<MenuButton> {
    return this.menu;
  }

  getEntities(): Array<any> {
    return this.entities;
  }

  initialiseVerticalMenu(
    menuTemplate: Array<MenuTemplate>,
    menuPosition: number
  ): Array<MenuButton> {
    return menuTemplate.map((item: MenuTemplate, index: number) => {
      return new MenuButton(
        TextFactory.createMenuItemGlow(),
        this.state,
        item.state,
        item.label
      ).setPosition({
        x: SIZES.GAME_WIDTH_HALF,
        y: menuPosition + index * (SIZES.TEXT_MENUITEM + SIZES.TEXT_SPACING),
      });
    });
  }

  // initialiseHorizontallyMenu(index){
  //     return GAME.SIZES.GAME_WIDTH / 3 * (index + 1);
  // }
}
