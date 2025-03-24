import { COLOURS } from "../constants/colours.js";
import { SIZES } from "../constants/game.js";
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
        ctx.lineWidth = 3;
        ctx.lineJoin = "bevel";
        ctx.fillStyle = COLOURS.BLACK;
        ctx.fillRect(this.position.x, this.position.y, this.statusBarLength, this.statusBarHeight);
        ctx.strokeStyle = COLOURS.WHITE;
        ctx.strokeRect(this.position.x, this.position.y, this.statusBarLength, this.statusBarHeight);
        ctx.fillStyle = COLOURS.WHITE;
        ctx.fillRect(this.position.x, this.position.y, this.statusBarLength * (this.currentStatus / this.maxStatus), this.statusBarHeight);
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