import { MenuButton } from "./components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { State } from "../states/State.js";
import { Menu } from "./Menu.js";
import { MenuLabelBuilder } from "./MenuLabelBuilder.js";
import { MenuTemplate } from "../constants/types.js";

export class MenuVertical extends Menu {
  constructor(state: State, template: Array<MenuTemplate>, position: number) {
    super();
    this.menuItems = this.initialiseVerticalMenu(state, template, position);
  }

  initialiseVerticalMenu(
    state: State,
    menuTemplate: Array<MenuTemplate>,
    menuPosition: number
  ): Array<MenuButton> {
    return menuTemplate.map((item: MenuTemplate, index: number) => {
      return new MenuButton(
        MenuLabelBuilder.createLabel(item.label),
        state,
        item.state
      ).setPosition({
        x: SIZES.GAME_WIDTH_HALF,
        y: menuPosition + index * (SIZES.TEXT_MENUITEM + SIZES.TEXT_SPACING),
      });
    });
  }
}
