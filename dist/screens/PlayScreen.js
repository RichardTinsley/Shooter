import { SIZES } from "../constants/game.js";
import { Lavoney } from "../entities/levels/Lavoney.js";
import { HUDDisplay } from "../GUI/HUDDisplay.js";
export class PlayScreen {
    constructor(screen) {
        this.screen = screen;
        this.hud = new HUDDisplay({ x: SIZES.TILE_HALF, y: SIZES.TILE_HALF });
        this.level = new Lavoney();
        this.entities = [];
        this.entities.push(...this.level.getTowerSpots());
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