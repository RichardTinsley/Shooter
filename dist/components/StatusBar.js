import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
import { drawRectangle } from "../utilities/drawShapes.js";
export class StatusBar {
    constructor(position) {
        this.position = position;
        this.statusBarHeight = 14;
        this.statusBarLength = SIZES.GAME_WIDTH / 3;
        this.currentStatus = 0;
        this.maxStatus = 0;
        this.position.x -= this.statusBarLength / 2;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.lineJoin = "bevel";
        drawRectangle(ctx, this.position, this.statusBarLength, this.statusBarHeight, 5, COLOURS.BLACK, COLOURS.WHITE);
        drawRectangle(ctx, this.position, this.statusBarLength * (this.currentStatus / this.maxStatus), this.statusBarHeight, 5, COLOURS.WHITE, COLOURS.WHITE);
        ctx.closePath();
    }
    setCurrentStatus(currentStatus) {
        this.currentStatus += currentStatus;
    }
    setMaxStatus(maxStatus) {
        this.maxStatus = maxStatus;
        return this;
    }
}
//# sourceMappingURL=StatusBar.js.map