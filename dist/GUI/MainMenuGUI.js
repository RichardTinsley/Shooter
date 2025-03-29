import { GUI } from "./GUI.js";
import { LABELS } from "./components/MenuButton.js";
import { FILE_NAMES } from "../constants/assets.js";
import { Sprite } from "../entities/Sprite.js";
export class MainMenuGUI extends GUI {
    constructor(state) {
        super(state);
        this.state = state;
        this.menuTemplate = [
            { state: this.state.setNewGameState, label: LABELS.NEWGAME },
            { state: this.state.setOptionsState, label: LABELS.OPTIONS },
            { state: this.state.setAboutState, label: LABELS.ABOUT },
        ];
        this.tower = new Sprite(FILE_NAMES.TOWER_AMETHYST_1, 64, 64).setPosition(100, 100);
        this.logo = new Sprite(FILE_NAMES.DSLOGO, 302, 293).setPosition(200, 600);
        this.menu = this.initialiseVerticalMenu(this.menuTemplate, 400);
    }
    draw(ctx) {
        super.draw(ctx);
        this.tower.draw(ctx);
        this.logo.draw(ctx);
    }
    update() {
        super.update();
        this.tower.update();
        this.logo.update();
    }
}
//# sourceMappingURL=MainMenuGUI.js.map