import { FILE_NAMES } from "../constants/assets.js";
import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
import { Sprite } from "../entities/Sprite.js";
import { drawRectangle } from "../utilities/drawShapes.js";
export class HUDDisplay {
    constructor(position) {
        this.position = position;
        this.anchorPointX = this.position.x + SIZES.TILE;
        this.anchorPointY = this.position.y + SIZES.TILE + 8;
        this.lives = new Sprite({ x: this.anchorPointX, y: this.anchorPointY }, FILE_NAMES.ICONS_LIVES, SIZES.TILE, SIZES.TILE);
        this.coins = new Sprite({ x: this.anchorPointX * 3, y: this.anchorPointY }, FILE_NAMES.ICONS_COINS, SIZES.TILE, SIZES.TILE);
        this.experience = new Sprite({ x: this.anchorPointX * 5, y: this.anchorPointY }, FILE_NAMES.ICONS_EXP, SIZES.TILE, SIZES.TILE);
        this.mana = new Sprite({ x: this.anchorPointX * 7, y: this.anchorPointY }, FILE_NAMES.ICONS_MANA, SIZES.TILE, SIZES.TILE);
        this.waves = new Sprite({ x: this.anchorPointX * 11, y: this.anchorPointY }, FILE_NAMES.ICONS_WAVES, SIZES.TILE, SIZES.TILE);
        this.pause = new Sprite({ x: this.anchorPointX * 14, y: this.anchorPointY }, FILE_NAMES.ICONS_PAUSE, SIZES.TILE, SIZES.TILE);
        this.audio = new Sprite({ x: this.anchorPointX * 15, y: this.anchorPointY }, FILE_NAMES.ICONS_AUDIO, SIZES.TILE, SIZES.TILE);
        this.settings = new Sprite({ x: this.anchorPointX * 16, y: this.anchorPointY }, FILE_NAMES.ICONS_SETTINGS, SIZES.TILE, SIZES.TILE);
    }
    draw(ctx) {
        ctx.lineWidth = 3;
        drawRectangle(ctx, this.position, SIZES.GAME_WIDTH - SIZES.TILE, SIZES.TILE + SIZES.TILE_HALF, COLOURS.DARKSHADOW, COLOURS.WHITE);
        this.lives.draw(ctx);
        this.coins.draw(ctx);
        this.experience.draw(ctx);
        this.mana.draw(ctx);
        this.waves.draw(ctx);
        this.pause.draw(ctx);
        this.audio.draw(ctx);
        this.settings.draw(ctx);
    }
    update() { }
}
//# sourceMappingURL=HUD.js.map