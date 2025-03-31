import { SIZES } from "../constants/game.js";
import { LABELS } from "../GUI/MenuLabelBuilder.js";
import { MenuVertical } from "../GUI/MenuVertical.js";
export class MainMenuState {
    constructor(state) {
        this.state = state;
        this.menuTemplate = [
            { state: this.state.setNewGameState, label: LABELS.NEWGAME },
            { state: this.state.setOptionsState, label: LABELS.OPTIONS },
            { state: this.state.setAboutState, label: LABELS.ABOUT },
        ];
        this.menu = new MenuVertical(state, this.menuTemplate, 400);
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
        this.menu.draw(ctx);
    }
    update() {
        this.menu.update();
    }
}
//# sourceMappingURL=MainMenuState.js.map