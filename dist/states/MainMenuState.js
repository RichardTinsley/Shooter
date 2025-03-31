import { SIZES } from "../constants/game.js";
import { MainMenu } from "../GUI/MenuMainMenu.js";
export class MainMenuState {
    constructor(state) {
        this.state = state;
        this.menu = new MainMenu(state, 400);
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