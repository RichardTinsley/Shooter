import { COLOURS } from "../../constants/colours.js";
import { SIZES } from "../../constants/game.js";
import { drawRectangle } from "../../utilities/drawShapes.js";
import { StatusBar } from "./StatusBar.js";
export class LoadingBar extends StatusBar {
    constructor(maxStatus) {
        super();
        this.maxStatus = maxStatus;
        this.statusBarHeight = 14;
        this.statusBarLength = SIZES.GAME_WIDTH / 3;
    }
    draw(ctx) {
        super.draw(ctx);
        drawRectangle(ctx, {
            x: this.position.x - this.drawOffsetX,
            y: this.position.y - this.drawOffsetY,
        }, this.statusBarLength * (this.currentStatus / this.maxStatus), this.statusBarHeight, COLOURS.WHITE, COLOURS.WHITE);
    }
}
//# sourceMappingURL=LoadingBar.js.map