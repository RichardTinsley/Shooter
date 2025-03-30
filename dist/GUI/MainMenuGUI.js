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
        this.tower = new Sprite(FILE_NAMES.TOWER_AMETHYST_1, 64, 64)
            .setPosition(200, 200)
            .setScale(5);
        this.logo = new Sprite(FILE_NAMES.DSLOGO, 302, 293)
            .setPosition(200, 600)
            .setScale(2);
        this.projectile = new Sprite(FILE_NAMES.PROJECTILE_SAPPHIRE_1, 84, 9)
            .setPosition(400, 600)
            .setScale(2);
        this.menu = this.initialiseVerticalMenu(this.menuTemplate, 400);
    }
    draw(ctx) {
        super.draw(ctx);
        this.logo.draw(ctx);
        this.tower.draw(ctx);
        this.projectile.draw(ctx);
    }
    update() {
        super.update();
        this.logo.update();
        this.tower.update();
        this.projectile.update();
    }
}
//# sourceMappingURL=MainMenuGUI.js.map