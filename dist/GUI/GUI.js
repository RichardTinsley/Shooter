import { MenuButton } from "./components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { TextFactory } from "../entities/texts/TextFactory.js";
export class GUI {
    constructor(state) {
        this.state = state;
        this.menu = [];
        this.entities = [];
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
    getEntities() {
        return this.entities;
    }
    initialiseVerticalMenu(menuTemplate, menuPosition) {
        return menuTemplate.map((item, index) => {
            return new MenuButton(TextFactory.textGlow().setSize(SIZES.TEXT_MENUITEM), this.state, item.state, item.label).setPosition({
                x: SIZES.GAME_WIDTH_HALF,
                y: menuPosition + index * (SIZES.TEXT_MENUITEM + SIZES.TEXT_SPACING),
            });
        });
    }
}
//# sourceMappingURL=GUI.js.map