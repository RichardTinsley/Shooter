import { getColour, COLOURS } from "../constants/colours.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";
export class StatusBarComponent extends ComponentBaseClass {
    constructor() {
        super(...arguments);
        this.currentStatus = 0;
        this.maxStatus = 0;
        this.statusBarColour = getColour(COLOURS.WHITE);
    }
    draw(ctx) {
        ctx.lineJoin = "round";
        this.drawBorder(ctx, getColour(COLOURS.WHITE), this.information.scaledSize.height);
        this.drawBox(ctx, getColour(COLOURS.BLACK), this.information.scaledSize.width);
        this.drawBorder(ctx, getColour(COLOURS.BLACK), this.information.halfHeight);
        this.drawBox(ctx, this.statusBarColour, this.information.scaledSize.width * (this.currentStatus / this.maxStatus));
    }
    drawBox(ctx, colour, width) {
        ctx.fillStyle = colour;
        ctx.fillRect(this.information.position.x - this.information.halfWidth, this.information.position.y - this.information.scaledSize.height, width, this.information.scaledSize.height);
    }
    drawBorder(ctx, lineColour, lineWidth) {
        ctx.strokeStyle = lineColour;
        ctx.lineWidth = lineWidth;
        ctx.strokeRect(this.information.position.x - this.information.halfWidth, this.information.position.y - this.information.scaledSize.height, this.information.scaledSize.width, this.information.scaledSize.height);
    }
    update() { }
    setStatusBarColour(colour) {
        this.statusBarColour = colour;
    }
    setStatus(currentStatus, maxStatus) {
        this.currentStatus = currentStatus;
        this.maxStatus = maxStatus;
        return this;
    }
    getCurrentStatus() {
        return this.currentStatus;
    }
    increaseCurrentStatus(increment) {
        this.currentStatus += increment;
        if (this.currentStatus > this.maxStatus)
            this.currentStatus = this.maxStatus;
    }
    decreaseCurrentStatus(decrement) {
        this.currentStatus -= decrement;
        if (this.currentStatus < 0)
            this.currentStatus = 0;
    }
}
//# sourceMappingURL=StatusBar.js.map