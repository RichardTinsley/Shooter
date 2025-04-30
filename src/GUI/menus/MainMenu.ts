import { SIZES } from "../../constants/sizes.js";
import { TextFactory } from "../texts/TextFactory.js";
import { LABELS, MenuTemplate } from "./Menu.js";
import { VerticalMenu } from "./VerticalMenu.js";

export class MainMenu extends VerticalMenu {
  constructor(buttons: any, position: number) {
    super();

    const MAIN_MENU: Array<MenuTemplate> = [
      {
        setScreen: buttons.battle,
        label: TextFactory.textGlow()
          .setText(LABELS.NEWGAME)
          .setHeight(SIZES.TEXT_MENUITEM),
      },
      {
        setScreen: buttons.options,
        label: TextFactory.textGlow()
          .setText(LABELS.OPTIONS)
          .setHeight(SIZES.TEXT_MENUITEM),
      },
      {
        setScreen: buttons.about,
        label: TextFactory.textGlow()
          .setText(LABELS.ABOUT)
          .setHeight(SIZES.TEXT_MENUITEM),
      },
    ];

    this.menuItems = this.initialiseVerticalMenu(MAIN_MENU, position);
  }
}
