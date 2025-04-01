import { FILE_NAMES } from "../constants/assets.js";
import { Enemy } from "../entities/enemies/Enemy.js";
import { Lavoney } from "../entities/levels/Lavoney.js";
export class PlayScreen {
    constructor(screen) {
        this.screen = screen;
        this.entities = [];
        this.level = new Lavoney();
        this.entities.push(...this.level.getTowerSpots());
        this.waypoints = this.level.getWaypoints();
        this.entities.push(new Enemy(FILE_NAMES.TOWER_AMETHYST_1, 64, 64, this.level.getWaypoints()).setPosition(this.waypoints[0]));
    }
    draw(ctx) {
        this.level.draw(ctx);
        this.entities.forEach((entity) => entity.draw(ctx));
    }
    update() {
        this.level.update();
        this.entities.forEach((entity) => entity.update());
    }
    getArray() {
        return this.entities;
    }
}
//# sourceMappingURL=PlayScreen.js.map