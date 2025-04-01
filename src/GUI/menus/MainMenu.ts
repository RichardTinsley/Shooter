import { MenuTemplate } from "../../constants/types.js";
import { Screen } from "../../screens/Screen.js";
import { LABELS } from "./MenuLabelBuilder.js";
import { VerticalMenu } from "./VerticalMenu.js";

export class MainMenu extends VerticalMenu {
  constructor(state: Screen, position: number) {
    super();

    const menuTemplate: Array<MenuTemplate> = [
      { state: state.setPlayScreen, label: LABELS.NEWGAME },
      { state: state.setOptionsScreen, label: LABELS.OPTIONS },
      { state: state.setAboutScreen, label: LABELS.ABOUT },
    ];

    this.menuItems = this.initialiseVerticalMenu(state, menuTemplate, position);
  }
}
