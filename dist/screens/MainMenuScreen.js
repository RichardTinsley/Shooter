import { ALL_ASSETS, FILE_NAMES } from "../constants/assets.js";
import { SIZES } from "../constants/sizes.js";
import { MainMenu } from "../GUI/menus/MainMenu.js";
export class MainMenuScreen {
    constructor(screen) {
        this.screen = screen;
        this.music = ALL_ASSETS.get(FILE_NAMES.MUSIC_MAIN_MENU);
        this.menu = new MainMenu(screen, 400);
        this.music.play();
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
        this.menu.draw(ctx);
    }
    update() {
        this.menu.update();
    }
}
//# sourceMappingURL=MainMenuScreen.js.map