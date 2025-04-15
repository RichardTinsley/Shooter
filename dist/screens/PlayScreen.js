import { SIZES } from "../constants/game.js";
import { HUD } from "../GUI/HUD/HUD.js";
import { Level } from "../handlers/Level.js";
import { EnemyWaves } from "../handlers/EnemyWaves.js";
export class PlayScreen {
    constructor(screen) {
        this.screen = screen;
        this.hud = new HUD({ x: SIZES.TILE_HALF, y: SIZES.TILE });
        this.level = new Level();
        this.enemies = new EnemyWaves();
        this.entities = [];
        this.entities.push(...this.level.createEmptyTowerSpots());
    }
    draw(ctx) {
        this.level.draw(ctx);
        this.hud.draw(ctx);
        this.entities.sort((a, b) => a.position.y - b.position.y);
        this.entities.forEach((entity) => entity.draw(ctx));
    }
    update() {
        this.level.update();
        this.hud.update();
        this.enemies.update(this.entities);
        this.entities.forEach((entity) => entity.update());
    }
    getArray() {
        return [...this.entities];
    }
}
//# sourceMappingURL=PlayScreen.js.map