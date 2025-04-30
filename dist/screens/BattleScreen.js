import { HUD } from "../GUI/HUD/HUD.js";
import { Menu } from "../GUI/menus/Menu.js";
import { Level } from "../handlers/Level.js";
import { EnemyWaves } from "../handlers/EnemyWaves.js";
export class BattleScreen {
    constructor(buttons) {
        this.menu = new Menu();
        this.hud = new HUD();
        this.level = new Level();
        this.enemyWaves = new EnemyWaves();
        this.entities = [];
    }
    draw(ctx) {
        this.level.draw(ctx);
        this.hud.draw(ctx);
        this.entities.sort((a, b) => a.position.y - b.position.y);
        this.entities.forEach((entity) => entity.getCurrentState().draw(ctx));
    }
    update() {
        this.level.update();
        this.hud.update();
        this.enemyWaves.update(this.entities);
        this.entities.forEach((entity) => entity.getCurrentState().update());
    }
}
//# sourceMappingURL=BattleScreen.js.map