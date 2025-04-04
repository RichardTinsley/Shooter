import { SIZES } from "../constants/game.js";
import { Sprite } from "../entities/Sprite.js";
import { TextFactory } from "../entities/texts/TextFactory.js";
export class HUDItem {
    constructor() {
        this.label = TextFactory.createTextPlain();
    }
    draw(ctx) {
        this.icon.draw(ctx);
        this.label.draw(ctx);
    }
    update() { }
    setItem(position, fileName) {
        this.label.setPosition({
            x: position.x + SIZES.TILE,
            y: position.y - SIZES.TILE_HALF,
        });
        this.icon = new Sprite(position, fileName, SIZES.TILE, SIZES.TILE);
        return this;
    }
}
//# sourceMappingURL=HUDItem.js.map