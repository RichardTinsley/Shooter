import { SIZES } from "../../constants/sizes.js";
import { TextFactory } from "../texts/TextFactory.js";
import { LABELS } from "./Menu.js";
import { VerticalMenu } from "./VerticalMenu.js";
export class BeginMenu extends VerticalMenu {
    constructor(buttons, position) {
        super();
        const BEGIN_MENU = [
            {
                setScreen: buttons.mainMenu,
                label: TextFactory.textPulsate()
                    .setText(LABELS.BEGIN)
                    .setHeight(SIZES.TEXT_BEGIN),
            },
        ];
        this.menuItems = this.initialiseVerticalMenu(BEGIN_MENU, position);
    }
}
//# sourceMappingURL=BeginMenu.js.map