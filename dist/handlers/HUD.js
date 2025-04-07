import { FILE_NAMES } from "../constants/assets.js";
import { SIZES } from "../constants/game.js";
import { HUDCoins } from "../GUI/HUD/HUDCoins.js";
import { HUDExperience } from "../GUI/HUD/HUDExperience.js";
import { HUDLives } from "../GUI/HUD/HUDLives.js";
import { HUDTimer } from "../GUI/HUD/HUDTimer.js";
import { HUDWaves } from "../GUI/HUD/HUDWaves.js";
export class HUD {
    constructor(position) {
        this.position = position;
        this.anchorPointY = this.position.y + SIZES.TILE;
        this.HUDItems = [
            new HUDCoins().setHUDItem({ x: this.position.x + SIZES.TILE * 5, y: this.anchorPointY }, FILE_NAMES.ICONS_COINS),
            new HUDExperience().setHUDItem({ x: this.position.x + SIZES.TILE * 9, y: this.anchorPointY }, FILE_NAMES.ICONS_EXP),
            new HUDWaves().setHUDItem({ x: this.position.x + SIZES.TILE * 32, y: this.anchorPointY }, FILE_NAMES.ICONS_WAVES),
            new HUDTimer().setHUDItem({ x: this.position.x + SIZES.TILE * 35, y: this.anchorPointY }, FILE_NAMES.ICONS_TIMER),
        ];
        HUD.hudlives = new HUDLives().setHUDItem({ x: this.position.x + SIZES.TILE * 2, y: this.anchorPointY }, FILE_NAMES.ICONS_LIVES);
    }
    draw(ctx) {
        this.HUDItems.forEach((item) => item.draw(ctx));
        HUD.hudlives.draw(ctx);
    }
    update() {
        this.HUDItems.forEach((item) => item.update());
    }
}
//# sourceMappingURL=HUD.js.map