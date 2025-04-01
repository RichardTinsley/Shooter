import { SIZES } from "../constants/game.js";
import { drawIntroScreen } from "../GUI/layouts/drawTitleScreen.js";
import { BeginMenu } from "../GUI/menus/BeginMenu.js";
export class BeginningScreen {
    constructor(screen) {
        this.screen = screen;
        this.menu = new BeginMenu(screen, SIZES.GAME_HEIGHT - 120);
    }
    draw(ctx) {
        drawIntroScreen(ctx);
        this.menu.draw(ctx);
    }
    update() {
        this.menu.update();
    }
}
//# sourceMappingURL=BeginState.js.map