import { FILE_NAMES } from "../constants/assets.js";
import { SIZES } from "../constants/game.js";
import { AnimatedSprite } from "../entities/AnimatedSprite.js";
import { Enemy } from "../entities/enemies/Enemy.js";
import { Lavoney } from "../entities/levels/Lavoney.js";
import { Sprite } from "../entities/Sprite.js";
import { HUDDisplay } from "../GUI/HUD.js";
import { MainMenu } from "../GUI/menus/MainMenu.js";
export class PlayScreen {
    constructor(screen) {
        this.screen = screen;
        this.hud = new HUDDisplay({ x: SIZES.TILE_HALF, y: SIZES.TILE_HALF });
        this.level = new Lavoney();
        this.entities = [];
        this.menu = new MainMenu(screen, 200);
        this.entities.push(...this.level.getTowerSpots());
        this.waypoints = this.level.getWaypoints();
        this.entities.push(new Enemy(this.waypoints[0], FILE_NAMES.TOWER_AMETHYST_1, 64, 64, this.level.getWaypoints()).setSpeed(10));
        this.entities.push(new Sprite({ x: 500, y: 400 }, FILE_NAMES.TOWER_AMETHYST_1, 64, 64));
        this.entities.push(new AnimatedSprite({ x: 600, y: 400 }, FILE_NAMES.TOWER_AMETHYST_1, 64, 64));
    }
    draw(ctx) {
        this.level.draw(ctx);
        this.hud.draw(ctx);
        this.menu.draw(ctx);
        this.entities.forEach((entity) => entity.draw(ctx));
    }
    update() {
        this.level.update();
        this.menu.update();
        this.entities.forEach((entity) => entity.update());
    }
    getArray() {
        return [...this.menu.getMenuItemsArray(), ...this.entities];
    }
}
//# sourceMappingURL=PlayScreen.js.map