import { MenuButton } from "../menuButtons/MenuButton.js";
import { SIZES } from "../../constants/sizes.js";
import { Menu } from "./Menu.js";
export class VerticalMenu extends Menu {
    constructor() {
        super();
    }
    initialiseVerticalMenu(menuTemplate, menuPosition) {
        return menuTemplate.map((item, index) => {
            return new MenuButton(item.setScreen, item.label).setPosition({
                x: SIZES.GAME_WIDTH_HALF,
                y: menuPosition + index * (SIZES.TEXT_MENUITEM + SIZES.TEXT_SPACING),
            });
        });
    }
}
//# sourceMappingURL=VerticalMenu.js.map