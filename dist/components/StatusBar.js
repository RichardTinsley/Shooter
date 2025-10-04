import { Component } from "../classes/Component.js";
import { getColour, COLOURS } from "../constants/colours.js";
export class StatusBar extends Component {
    constructor() {
        super(...arguments);
        this.statusBarColour = getColour(COLOURS.GREEN);
    }
    draw(ctx) {
        ctx.lineJoin = "round";
        this.drawBorder(ctx, getColour(COLOURS.WHITE), this.size.height);
        this.drawBox(ctx, getColour(COLOURS.BLACK));
        this.drawBorder(ctx, getColour(COLOURS.BLACK), this.size.height / 2);
        this.drawBox(ctx, this.statusBarColour, this.size.width * (this.currentStatus / this.maxStatus));
    }
    drawBox(ctx, colour, width = this.size.width) {
        ctx.fillStyle = colour;
        ctx.fillRect(this.position.x - this.drawOffsetX, this.position.y - this.drawOffsetY, width, this.size.height);
    }
    drawBorder(ctx, lineColour, lineWidth) {
        ctx.strokeStyle = lineColour;
        ctx.lineWidth = lineWidth;
        ctx.strokeRect(this.position.x - this.drawOffsetX, this.position.y - this.drawOffsetY, this.size.width, this.size.height);
    }
    update() { }
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
    }
    decreaseCurrentStatus(decrement) {
        this.currentStatus -= decrement;
    }
}
//# sourceMappingURL=StatusBar.js.map