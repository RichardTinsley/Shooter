import { GUI } from "./GUI.js";
import { LABELS } from "./components/MenuButton.js";
import { FILE_NAMES } from "../constants/assets.js";
import { Sprite } from "../entities/Sprite.js";
import { Projectile } from "../entities/projectiles/Projectile.js";
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
        this.projectile = new Projectile(FILE_NAMES.PROJECTILE_SAPPHIRE_1, 84, 9)
            .setPosition(20, 20)
            .setDestination(1000, 1000)
            .setScale(2);
        this.projectile2 = new Projectile(FILE_NAMES.PROJECTILE_SAPPHIRE_1, 84, 9)
            .setPosition(600, 600)
            .setDestination(10, 10)
            .setScale(2);
        this.menu = this.initialiseVerticalMenu(this.menuTemplate, 400);
        this.entities.push(this.tower, this.projectile, this.projectile2);
    }
    draw(ctx) {
        super.draw(ctx);
        this.entities.forEach((entity) => entity.draw(ctx));
    }
    update() {
        super.update();
        this.entities.forEach((entity) => entity.update());
    }
}
//# sourceMappingURL=MainMenuGUI.js.map