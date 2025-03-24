import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
import { drawRectangle } from "../utilities/drawShapes.js";
import { StatusBar } from "./StatusBar.js";
export class LoadingBar extends StatusBar {
    constructor(position) {
        super(position);
        this.position = position;
        this.statusBarHeight = 14;
        this.statusBarLength = SIZES.GAME_WIDTH / 3;
        this.position.x -= this.statusBarLength / 2;
    }
    draw(ctx) {
        super.draw(ctx);
        drawRectangle(ctx, this.position, this.statusBarLength * (this.currentStatus / this.maxStatus), this.statusBarHeight, COLOURS.WHITE, COLOURS.WHITE);
    }
}
//# sourceMappingURL=LoadingBar.js.map