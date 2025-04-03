import { FILE_NAMES } from "../constants/assets.js";
import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
import { Sprite } from "../entities/Sprite.js";
import { drawRectangle } from "../utilities/drawShapes.js";
export class HUDDisplay {
    constructor(position) {
        this.position = position;
        this.anchorPointX = this.position.x;
        this.anchorPointY = this.position.y + SIZES.TILE + 8;
        this.icons = [];
        this.names = [
            FILE_NAMES.ICONS_LIVES,
            FILE_NAMES.ICONS_COINS,
            FILE_NAMES.ICONS_EXP,
            FILE_NAMES.ICONS_WAVES,
            FILE_NAMES.ICONS_MANA,
            FILE_NAMES.ICONS_PAUSE,
            FILE_NAMES.ICONS_AUDIO,
            FILE_NAMES.ICONS_SETTINGS,
            FILE_NAMES.ICONS_TIMER,
        ];
        this.spacing = SIZES.TILE;
        this.icons = this.names.map((name, index) => {
            if (index === 1)
                this.spacing = SIZES.TILE * 4;
            if (index === 5)
                this.spacing = SIZES.TILE * 7;
            if (index === 6)
                this.spacing = SIZES.TILE_HALF * 5;
            if (index === 8)
                this.spacing = SIZES.TILE * 4;
            return new Sprite({
                x: (this.anchorPointX += this.spacing),
                y: this.anchorPointY,
            }, name, SIZES.TILE, SIZES.TILE);
        });
    }
    draw(ctx) {
        ctx.lineWidth = 3;
        drawRectangle(ctx, this.position, SIZES.GAME_WIDTH - SIZES.TILE, SIZES.TILE + SIZES.TILE_HALF, COLOURS.DARKSHADOW, COLOURS.WHITE);
        this.icons.forEach((icon) => icon.draw(ctx));
    }
    update() { }
}
//# sourceMappingURL=HUDDisplay.js.map