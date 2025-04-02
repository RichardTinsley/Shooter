import { SIZES } from "../constants/game.js";
import { deathSorceryLogoLayout } from "../GUI/layouts/deathSorceryLogoLayout.js";
import { BeginMenu } from "../GUI/menus/BeginMenu.js";
import { TowerModal } from "../GUI/TowerModal.js";
export class BeginningScreen {
    constructor(screen) {
        this.screen = screen;
        this.logo = new deathSorceryLogoLayout();
        this.modal = new TowerModal({ x: 400, y: 400 }, 300);
        this.menu = new BeginMenu(screen, SIZES.GAME_HEIGHT - 120);
    }
    draw(ctx) {
        this.logo.draw(ctx);
        this.menu.draw(ctx);
        this.modal.draw(ctx);
    }
    update() {
        this.menu.update();
        this.modal.update();
    }
    getArray() {
        return this.menu.getMenuItemsArray();
    }
}
//# sourceMappingURL=BeginScreen.js.map