import { SIZES } from "../../constants/game.js";
import { TextFactory } from "../texts/TextFactory.js";
import { LABELS } from "./Menu.js";
import { VerticalMenu } from "./VerticalMenu.js";
export class BeginMenu extends VerticalMenu {
    constructor(screen, position) {
        super();
        const BEGIN_MENU = [
            {
                screen: screen.setMainMenuScreen,
                label: TextFactory.textPulsate()
                    .setText(LABELS.BEGIN)
                    .setHeight(SIZES.TEXT_BEGIN),
            },
        ];
        this.menuItems = this.initialiseVerticalMenu(screen, BEGIN_MENU, position);
    }
}
//# sourceMappingURL=BeginMenu.js.map