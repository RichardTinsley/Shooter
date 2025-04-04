import { SIZES } from "../../constants/game.js";
import { Sprite } from "../../entities/Sprite.js";
import { Text } from "../texts/Text.js";
export class HUDItem extends Text {
    constructor() {
        super();
        this.align = "left";
    }
    draw(ctx) {
        super.draw(ctx);
        this.icon.draw(ctx);
    }
    setHUDItem(position, fileName) {
        super.setPosition(position);
        const newPosition = {
            x: (position.x -= SIZES.TILE),
            y: (position.y += SIZES.TILE_HALF),
        };
        this.icon = new Sprite(position, fileName, SIZES.TILE, SIZES.TILE);
        return this;
    }
}
//# sourceMappingURL=HUDItem.js.map