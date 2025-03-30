import { GUI } from "./GUI.js";
import { LABELS } from "./components/MenuButton.js";
import { FILE_NAMES } from "../constants/assets.js";
import { Enemy } from "../entities/enemies/Enemy.js";
import { LAVONEY_WAYPOINTS, generateEnemyWaypoints, } from "../constants/levels.js";
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
        this.waypoints = generateEnemyWaypoints(LAVONEY_WAYPOINTS);
        this.projectile = new Enemy(FILE_NAMES.PROJECTILE_SAPPHIRE_1, 84, 9, this.waypoints)
            .setPosition(this.waypoints[0])
            .setDestination(this.waypoints[0])
            .setScale(1);
        this.tower = new Projectile(FILE_NAMES.TOWER_AMETHYST_1, 64, 64)
            .setPosition(this.waypoints[0])
            .setDestination(this.waypoints[7])
            .setSpeed(1)
            .setScale(1);
        this.menu = this.initialiseVerticalMenu(this.menuTemplate, 400);
        this.entities.push(this.projectile, this.tower);
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