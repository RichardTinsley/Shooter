import { Sprite } from "../../entities/sprites/Sprite.js";
import { Text } from "../texts/Text.js";
import { MenuButton } from "../menuButtons/MenuButton.js";

export type MenuTemplate = {
  setScreen: Function;
  label: Text | Sprite;
};

export enum LABELS {
  BEGIN = "Begin!",
  NEWGAME = "New Game",
  OPTIONS = "Options",
  ABOUT = "About",
}

export class Menu {
  protected menuItems: Array<MenuButton> = [];

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

  // initialiseHorizontallyMenu(index){
  //     return GAME.SIZES.GAME_WIDTH / 3 * (index + 1);
  // }
}
