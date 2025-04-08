import { MenuTemplate } from "../../constants/types.js";
import { Screen } from "../../screens/Screen.js";
import { LABELS } from "./MenuLabelBuilder.js";
import { VerticalMenu } from "./VerticalMenu.js";

export class MainMenu extends VerticalMenu {
  constructor(screen: Screen, position: number) {
    super();

    const menuTemplate: Array<MenuTemplate> = [
      { screen: screen.setPlayScreen, label: LABELS.NEWGAME },
      { screen: screen.setOptionsScreen, label: LABELS.OPTIONS },
      { screen: screen.setAboutScreen, label: LABELS.ABOUT },
    ];

    this.menuItems = this.initialiseVerticalMenu(
      screen,
      menuTemplate,
      position
    );
  }
}
