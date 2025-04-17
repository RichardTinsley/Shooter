import { SIZES } from "../../constants/game.js";
import { Screen } from "../../screens/Screen.js";
import { TextFactory } from "../texts/TextFactory.js";
import { LABELS, MenuTemplate } from "./Menu.js";
import { VerticalMenu } from "./VerticalMenu.js";

export class MainMenu extends VerticalMenu {
  constructor(screen: Screen, position: number) {
    super();

    const MAIN_MENU: Array<MenuTemplate> = [
      {
        screen: screen.switchToBattleScreen,
        label: TextFactory.textGlow()
          .setText(LABELS.NEWGAME)
          .setHeight(SIZES.TEXT_MENUITEM),
      },
      {
        screen: screen.switchToOptionsScreen,
        label: TextFactory.textGlow()
          .setText(LABELS.OPTIONS)
          .setHeight(SIZES.TEXT_MENUITEM),
      },
      {
        screen: screen.switchToAboutScreen,
        label: TextFactory.textGlow()
          .setText(LABELS.ABOUT)
          .setHeight(SIZES.TEXT_MENUITEM),
      },
    ];

    this.menuItems = this.initialiseVerticalMenu(screen, MAIN_MENU, position);
  }
}
