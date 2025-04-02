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
        drawRectangle(ctx, this.position, this.statusBarLength, this.statusBarHeight, this.backgroundFillColour, this.backgroundStrokeColour);
    }
    update() {
        return;
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
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
}
//# sourceMappingURL=StatusBar.js.map