import { SIZES } from "../constants/game.js";
import { MainMenu } from "../GUI/menus/MainMenu.js";
export class MainMenuScreen {
    constructor(screen) {
        this.screen = screen;
        this.menu = new MainMenu(screen, 400);
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