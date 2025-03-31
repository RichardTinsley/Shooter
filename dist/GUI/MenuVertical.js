import { MenuButton } from "./components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { Menu } from "./Menu.js";
import { MenuLabelBuilder } from "./MenuLabelBuilder.js";
export class MenuVertical extends Menu {
    constructor(state, template, position) {
        super();
        this.menuItems = this.initialiseVerticalMenu(state, template, position);
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
//# sourceMappingURL=MenuVertical.js.map