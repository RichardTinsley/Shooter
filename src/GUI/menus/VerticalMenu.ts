import { MenuButton } from "../menuButtons/MenuButton.js";
import { SIZES } from "../../constants/game.js";
import { Screen } from "../../screens/Screen.js";
import { Menu, MenuTemplate } from "./Menu.js";

export class VerticalMenu extends Menu {
  constructor() {
    super();
  }

  initialiseVerticalMenu(
    screen: Screen,
    menuTemplate: Array<MenuTemplate>,
    menuPosition: number
  ): Array<MenuButton> {
    return menuTemplate.map((item: MenuTemplate, index: number) => {
      return new MenuButton(item.label, screen, item.screen).setPosition({
        x: SIZES.GAME_WIDTH_HALF,
        y: menuPosition + index * (SIZES.TEXT_MENUITEM + SIZES.TEXT_SPACING),
      });
    });
  }
}
