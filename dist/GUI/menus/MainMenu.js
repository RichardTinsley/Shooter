import { SIZES } from "../../constants/sizes.js";
import { TextFactory } from "../texts/TextFactory.js";
import { LABELS } from "./Menu.js";
import { VerticalMenu } from "./VerticalMenu.js";
export class MainMenu extends VerticalMenu {
    constructor(buttons, position) {
        super();
        const MAIN_MENU = [
            {
                setScreen: buttons.battleScreen,
                label: TextFactory.textGlow()
                    .setText(LABELS.NEWGAME)
                    .setHeight(SIZES.TEXT_MENUITEM),
            },
            {
                setScreen: buttons.optionsScreen,
                label: TextFactory.textGlow()
                    .setText(LABELS.OPTIONS)
                    .setHeight(SIZES.TEXT_MENUITEM),
            },
            {
                setScreen: buttons.aboutScreen,
                label: TextFactory.textGlow()
                    .setText(LABELS.ABOUT)
                    .setHeight(SIZES.TEXT_MENUITEM),
            },
        ];
        this.menuItems = this.initialiseVerticalMenu(MAIN_MENU, position);
    }
}
//# sourceMappingURL=MainMenu.js.map