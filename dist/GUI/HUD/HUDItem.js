import { SIZES } from "../../constants/game.js";
import { Text } from "../texts/Text.js";
export class HUDItem extends Text {
    draw(ctx) {
        super.draw(ctx);
    }
    setHUDItem(position, fileName) {
        super.setPosition(position);
        position.x -= SIZES.TILE_HALF;
        position.y += SIZES.TILE_HALF;
        this.align = "left";
        this.size = SIZES.TEXT_IN_GAME;
        return this;
    }
}
//# sourceMappingURL=HUDItem.js.map