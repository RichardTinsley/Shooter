import { SIZES } from "../constants/game.js";
import { MainMenu } from "../GUI/menus/MainMenu.js";
export class MainMenuState {
    constructor(state) {
        this.state = state;
        this.menu = new MainMenu(state, 400);
        console.log(this.menu);
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