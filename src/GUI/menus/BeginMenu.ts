import { SIZES } from "../../constants/sizes.js";
import { TextFactory } from "../texts/TextFactory.js";
import { MenuTemplate, LABELS } from "./Menu.js";
import { VerticalMenu } from "./VerticalMenu.js";

export class BeginMenu extends VerticalMenu {
  constructor(screen: any, position: number) {
    super();
    const BEGIN_MENU: Array<MenuTemplate> = [
      {
        setScreen: screen.mainMenuScreen,
        label: TextFactory.textPulsate()
          .setText(LABELS.BEGIN)
          .setHeight(SIZES.TEXT_BEGIN),
      },
    ];

    this.menuItems = this.initialiseVerticalMenu(BEGIN_MENU, position);
  }
}
