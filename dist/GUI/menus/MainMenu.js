import { SIZES } from "../../constants/game.js";
import { TextFactory } from "../texts/TextFactory.js";
import { LABELS } from "./Menu.js";
import { VerticalMenu } from "./VerticalMenu.js";
export class MainMenu extends VerticalMenu {
    constructor(screen, position) {
        super();
        const MAIN_MENU = [
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
//# sourceMappingURL=MainMenu.js.map