import { FILE_NAMES } from "../constants/assets.js";
import { SIZES } from "../constants/game.js";
import { HUDDisplay } from "../handlers/HUDDisplay.js";
import { HUDItem } from "../GUI/HUD/HUDItem.js";
import { Level } from "../handlers/Level.js";
import { Waves } from "../handlers/Waves.js";
import { HUDTimer } from "../GUI/HUD/HUDTimer.js";
import { Time } from "../handlers/Time.js";
export class PlayScreen {
    constructor(screen) {
        this.screen = screen;
        this.hud = new HUDDisplay({ x: SIZES.TILE_HALF, y: SIZES.TILE_HALF });
        this.level = new Level();
        this.entities = [];
        this.waves = new Waves();
        this.hudItem = new HUDItem().setHUDItem({ x: 100, y: 100 }, FILE_NAMES.ICONS_LIVES);
        this.hudTimer = new HUDTimer().setHUDItem({ x: 200, y: 200 }, FILE_NAMES.ICONS_TIMER);
        this.entities.push(...this.level.createEmptyTowerSpots());
        Time.startTimer();
    }
    draw(ctx) {
        this.level.draw(ctx);
        this.hud.draw(ctx);
        this.entities.forEach((entity) => entity.draw(ctx));
        this.hudItem.draw(ctx);
        this.hudTimer.draw(ctx);
    }
    update() {
        this.level.update();
        this.entities.forEach((entity) => entity.update());
        this.waves.update();
        this.hudTimer.update();
    }
    getArray() {
        return [];
    }
}
//# sourceMappingURL=PlayScreen.js.map