import { SIZES } from "../constants/game.js";
export class GUI {
    constructor(state) {
        this.state = state;
        this.menu = [];
        this.initialiseMenu(state);
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
        this.menu.forEach((item) => {
            item.draw(ctx);
        });
    }
    update() {
        this.menu.forEach((item) => {
            item.update();
        });
    }
    getMenu() {
        return this.menu;
    }
    initialiseMenu(state) {
        return;
    }
}
//# sourceMappingURL=GUI.js.map