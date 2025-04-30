import { SIZES } from "../constants/sizes.js";
import { deathSorceryLogoLayout } from "../GUI/layouts/deathSorceryLogoLayout.js";
import { BeginMenu } from "../GUI/menus/BeginMenu.js";
export class BeginScreen {
    constructor(buttons) {
        this.logo = new deathSorceryLogoLayout();
        this.menu = new BeginMenu(buttons, SIZES.GAME_HEIGHT - 110);
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