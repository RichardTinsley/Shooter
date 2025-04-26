import { SIZES } from "../../constants/sizes.js";
import { Sprite } from "../../entities/sprites/Sprite.js";
import { Text } from "../texts/Text.js";
export class HUDItem extends Text {
    draw(ctx) {
        super.draw(ctx);
        this.icon.draw(ctx);
    }
    setHUDItem(position, fileName) {
        super.setPosition(position);
        position.x -= SIZES.TILE_HALF;
        position.y += SIZES.TILE_HALF;
        this.icon = new Sprite()
            .setPosition(position)
            .setImage(fileName, SIZES.TILE, SIZES.TILE)
            .setScale(1);
        this.align = "left";
        this.size = SIZES.TEXT_IN_GAME;
        return this;
    }
}
//# sourceMappingURL=HUDItem.js.map