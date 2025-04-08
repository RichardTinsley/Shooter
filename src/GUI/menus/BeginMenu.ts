import { MenuTemplate } from "../../constants/types.js";
import { Screen } from "../../screens/Screen.js";
import { LABELS } from "./MenuLabelBuilder.js";
import { VerticalMenu } from "./VerticalMenu.js";

export class BeginMenu extends VerticalMenu {
  constructor(screen: Screen, position: number) {
    super();

    const menuTemplate: Array<MenuTemplate> = [
      { screen: screen.setMainMenuScreen, label: LABELS.BEGIN },
    ];

    this.menuItems = this.initialiseVerticalMenu(
      screen,
      menuTemplate,
      position
    );
  }
}
