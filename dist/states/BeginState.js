import { SIZES } from "../constants/game.js";
import { drawIntroScreen } from "../GUI/layouts/drawTitleScreen.js";
import { LABELS } from "../GUI/MenuLabelBuilder.js";
import { MenuVertical } from "../GUI/MenuVertical.js";
export class BeginState {
    constructor(state) {
        this.state = state;
        this.menuTemplate = [
            { state: this.state.setMainMenuState, label: LABELS.BEGIN },
        ];
        this.menu = new MenuVertical(state, this.menuTemplate, SIZES.GAME_HEIGHT - 120);
        console.log(this.menu);
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