import { FILE_NAMES } from "../constants/assets.js";
import { SIZES } from "../constants/game.js";
import { HUDLives } from "../GUI/HUD/HUDLives.js";
import { HUDCoins } from "../GUI/HUD/HUDCoins.js";
import { HUDExperience } from "../GUI/HUD/HUDExperience.js";
import { HUDMana } from "../GUI/HUD/HUDMana.js";
import { HUDWaves } from "../GUI/HUD/HUDWaves.js";
import { HUDTimer } from "../GUI/HUD/HUDTimer.js";
export class HUD {
    constructor(position) {
        this.position = position;
        HUD.hudLives = new HUDLives().setHUDItem({ x: this.position.x + SIZES.TILE * 2, y: this.position.y }, FILE_NAMES.ICONS_LIVES);
        HUD.hudCoins = new HUDCoins().setHUDItem({ x: this.position.x + SIZES.TILE * 5, y: this.position.y }, FILE_NAMES.ICONS_COINS);
        HUD.hudExperience = new HUDExperience().setHUDItem({ x: this.position.x + SIZES.TILE * 9, y: this.position.y }, FILE_NAMES.ICONS_EXP);
        HUD.hudMana = new HUDMana().setHUDItem({ x: this.position.x + SIZES.TILE * 13, y: this.position.y }, FILE_NAMES.ICONS_MANA);
        HUD.hudWaves = new HUDWaves().setHUDItem({ x: this.position.x + SIZES.TILE * 32, y: this.position.y }, FILE_NAMES.ICONS_WAVES);
        HUD.hudTimer = new HUDTimer().setHUDItem({ x: this.position.x + SIZES.TILE * 35, y: this.position.y }, FILE_NAMES.ICONS_TIMER);
    }
    draw(ctx) {
        HUD.hudLives.draw(ctx);
        HUD.hudCoins.draw(ctx);
        HUD.hudExperience.draw(ctx);
        HUD.hudMana.draw(ctx);
        HUD.hudWaves.draw(ctx);
        HUD.hudTimer.draw(ctx);
    }
    update() {
        HUD.hudMana.update();
        HUD.hudTimer.update();
    }
}
//# sourceMappingURL=HUD.js.map