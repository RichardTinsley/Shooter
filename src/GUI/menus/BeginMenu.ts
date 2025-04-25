import { SIZES } from "../../constants/game.js";
import { Screen } from "../../screens/Screen.js";
import { TextFactory } from "../texts/TextFactory.js";
import { MenuTemplate, LABELS } from "./Menu.js";
import { VerticalMenu } from "./VerticalMenu.js";

export class BeginMenu extends VerticalMenu {
  constructor(screen: Screen, position: number) {
    super();

    const BEGIN_MENU: Array<MenuTemplate> = [
      {
        setScreen: screen.switchToMainMenuScreen,
        label: TextFactory.textPulsate()
          .setText(LABELS.BEGIN)
          .setHeight(SIZES.TEXT_BEGIN),
      },
    ];

    this.menuItems = this.initialiseVerticalMenu(BEGIN_MENU, position);
  }
}
