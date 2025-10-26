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
        this.drawBorder(ctx, getColour(COLOURS.WHITE), this.information.size.height);
        this.drawBox(ctx, getColour(COLOURS.BLACK), this.information.size.width);
        this.drawBorder(ctx, getColour(COLOURS.BLACK), this.information.size.height / 2);
        this.drawBox(ctx, this.statusBarColour, this.information.size.width * (this.currentStatus / this.maxStatus));
    }
    drawBox(ctx, colour, width) {
        ctx.fillStyle = colour;
        ctx.fillRect(this.information.position.x - this.information.halfWidth, this.information.position.y - this.information.size.height, width, this.information.size.height);
    }
    drawBorder(ctx, lineColour, lineWidth) {
        ctx.strokeStyle = lineColour;
        ctx.lineWidth = lineWidth;
        ctx.strokeRect(this.information.position.x - this.information.halfWidth, this.information.position.y - this.information.size.height, this.information.size.width, this.information.size.height);
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