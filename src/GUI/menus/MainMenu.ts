import { SIZES } from "../../constants/sizes.js";
import { Screen } from "../../screens/Screen.js";
import { TextFactory } from "../texts/TextFactory.js";
import { LABELS, MenuTemplate } from "./Menu.js";
import { VerticalMenu } from "./VerticalMenu.js";

export class MainMenu extends VerticalMenu {
  constructor(screen: Screen, position: number) {
    super();

    const MAIN_MENU: Array<MenuTemplate> = [
      {
        setScreen: screen.switchToBattleScreen,
        label: TextFactory.textGlow()
          .setText(LABELS.NEWGAME)
          .setHeight(SIZES.TEXT_MENUITEM),
      },
      {
        setScreen: screen.switchToOptionsScreen,
        label: TextFactory.textGlow()
          .setText(LABELS.OPTIONS)
          .setHeight(SIZES.TEXT_MENUITEM),
      },
      {
        setScreen: screen.switchToAboutScreen,
        label: TextFactory.textGlow()
          .setText(LABELS.ABOUT)
          .setHeight(SIZES.TEXT_MENUITEM),
      },
    ];

    this.menuItems = this.initialiseVerticalMenu(MAIN_MENU, position);
  }
}
