import { SIZES } from "../constants/game.js";
import { drawIntroScreen } from "../GUI/layouts/drawTitleScreen.js";
import { BeginMenu } from "../GUI/menus/BeginMenu.js";
export class BeginState {
    constructor(state) {
        this.state = state;
        this.menu = new BeginMenu(state, SIZES.GAME_HEIGHT - 120);
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