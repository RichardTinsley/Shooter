import { COLOURS } from "../../constants/colours.js";
import { drawRectangle } from "../../utilities/drawShapes.js";
export class StatusBar {
    constructor(position) {
        this.position = position;
        this.statusBarHeight = 0;
        this.statusBarLength = 0;
        this.currentStatus = 0;
        this.maxStatus = 0;
        this.lineJoin = "bevel";
        this.lineWidth = 4;
        this.backgroundFillColour = COLOURS.BLACK;
        this.backgroundStrokeColour = COLOURS.WHITE;
    }
    draw(ctx) {
        ctx.lineJoin = this.lineJoin;
        ctx.lineWidth = this.lineWidth;
        drawRectangle(ctx, this.position, this.statusBarLength, this.statusBarHeight, this.backgroundFillColour, this.backgroundStrokeColour);
    }
    getCurrentStatus() {
        return this.currentStatus;
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