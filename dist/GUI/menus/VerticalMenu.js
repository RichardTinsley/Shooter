import { MenuButton } from "./MenuButton.js";
import { SIZES } from "../../constants/game.js";
import { Menu } from "./Menu.js";
import { MenuLabelBuilder } from "./MenuLabelBuilder.js";
export class VerticalMenu extends Menu {
    constructor() {
        super();
    }
    initialiseVerticalMenu(state, menuTemplate, menuPosition) {
        return menuTemplate.map((item, index) => {
            return new MenuButton(MenuLabelBuilder.createLabel(item.label), state, item.state).setPosition({
                x: SIZES.GAME_WIDTH_HALF,
                y: menuPosition + index * (SIZES.TEXT_MENUITEM + SIZES.TEXT_SPACING),
            });
        });
    }
}
//# sourceMappingURL=VerticalMenu.js.map