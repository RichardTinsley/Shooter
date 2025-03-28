import { MenuButton } from "../components/MenuButton.js";
import { SIZES } from "../constants/game.js";
import { TextFactory } from "../texts/TextFactory.js";
import { Menu } from "./Menu.js";
export class LoadingCompleteMenu extends Menu {
    constructor() {
        super();
        this.beginButton = new MenuButton(TextFactory.createMenuItemGlow(), "Begin!", SIZES.GAME_WIDTH_HALF, SIZES.GAME_HEIGHT - 120);
        this.menuItems.push(this.beginButton);
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        super.update();
    }
}
//# sourceMappingURL=LoadingCompleteMenu.js.map