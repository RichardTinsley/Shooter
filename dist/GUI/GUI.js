import { MenuButton } from "./components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { TextFactory } from "../texts/TextFactory.js";
export class GUI {
    constructor(state) {
        this.state = state;
        this.menu = [];
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
        this.menu.forEach((item) => {
            item.draw(ctx);
        });
    }
    update() {
        this.menu.forEach((item) => {
            item.update();
        });
    }
    getMenu() {
        return this.menu;
    }
    initialiseVerticalMenu(menuTemplate, menuPosition) {
        return menuTemplate.map((item, index) => {
            return new MenuButton(TextFactory.createMenuItemGlow(), this.state, item.state, item.label).setPosition(SIZES.GAME_WIDTH_HALF, menuPosition + index * (SIZES.TEXT_MENUITEM + SIZES.TEXT_SPACING));
        });
    }
}
//# sourceMappingURL=GUI.js.map