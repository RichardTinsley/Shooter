import { HUD } from "../GUI/HUD/HUD.js";
import { Level } from "../handlers/Level.js";
import { EnemyWaves } from "../handlers/EnemyWaves.js";
export class BattleScreen {
    constructor(screen) {
        this.screen = screen;
        this.hud = new HUD();
        this.level = new Level();
        this.enemyWaves = new EnemyWaves();
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
        this.enemyWaves.update(this.entities);
        this.entities.forEach((entity) => entity.update());
    }
    getArray() {
        return [...this.entities];
    }
}
//# sourceMappingURL=BattleScreen.js.map