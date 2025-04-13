import { COLOURS } from "../../constants/colours.js";
import { drawRectangle } from "../../utilities/drawShapes.js";
export class StatusBar {
    constructor() {
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
        drawRectangle(ctx, {
            x: this.position.x - this.drawOffsetX,
            y: this.position.y - this.drawOffsetY,
        }, this.statusBarLength, this.statusBarHeight, this.backgroundFillColour, this.backgroundStrokeColour);
    }
    setPosition(position) {
        this.position = position;
        return this;
    }
    getPosition() {
        return this.position;
    }
    getCurrentStatus() {
        return this.currentStatus;
    }
    setCurrentStatus(currentStatus) {
        this.currentStatus += currentStatus;
    }
    setDrawOffsets(offsetY, offsetX = this.statusBarLength / 2) {
        this.drawOffsetX = offsetX;
        this.drawOffsetY = offsetY;
        return this;
    }
}
//# sourceMappingURL=StatusBar.js.map