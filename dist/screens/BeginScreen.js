import { SIZES } from "../constants/game.js";
import { deathSorceryLogoLayout } from "../GUI/layouts/deathSorceryLogoLayout.js";
import { BeginMenu } from "../GUI/menus/BeginMenu.js";
export class BeginningScreen {
    constructor(screen) {
        this.screen = screen;
        this.logo = new deathSorceryLogoLayout();
        this.menu = new BeginMenu(screen, SIZES.GAME_HEIGHT - 120);
    }
    draw(ctx) {
        this.logo.draw(ctx);
        this.menu.draw(ctx);
    }
    update() {
        this.menu.update();
    }
}
//# sourceMappingURL=BeginScreen.js.map