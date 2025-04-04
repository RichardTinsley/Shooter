import { SIZES } from "../constants/game.js";
import { HUDDisplay } from "../handlers/HUDDisplay.js";
import { Level } from "../handlers/Level.js";
import { Waves } from "../handlers/Waves.js";
export class PlayScreen {
    constructor(screen) {
        this.screen = screen;
        this.hud = new HUDDisplay({ x: SIZES.TILE_HALF, y: SIZES.TILE_HALF });
        this.level = new Level();
        this.entities = [];
        this.waves = new Waves();
        this.entities.push(...this.level.createEmptyTowerSpots());
    }
    draw(ctx) {
        this.level.draw(ctx);
        this.hud.draw(ctx);
        this.entities.forEach((entity) => entity.draw(ctx));
    }
    update() {
        this.level.update();
        this.entities.forEach((entity) => entity.update());
        this.waves.update();
    }
    getArray() {
        return [];
    }
}
//# sourceMappingURL=PlayScreen.js.map