import { COLOURS, getColour } from "../../constants/colours.js";
export class StatusBar {
    constructor() {
        this.lineJoin = "bevel";
        this.lineWidth = 4;
        this.statusBarFillColour = getColour(COLOURS.GREEN, 1);
        this.boxFillColour = getColour(COLOURS.BLACK, 1);
        this.borderColour = getColour(COLOURS.WHITE, 1);
    }
    draw(ctx) {
        ctx.lineJoin = this.lineJoin;
        ctx.lineWidth = this.lineWidth;
        this.drawBorderBox(ctx);
        this.drawStatusBar(ctx);
    }
    drawBorderBox(ctx) {
        ctx.strokeStyle = this.borderColour;
        ctx.strokeRect(this.position.x - this.drawOffsetX, this.position.y - this.drawOffsetY, this.width, this.height);
    }
    drawStatusBar(ctx) {
        ctx.fillStyle = this.boxFillColour;
        ctx.fillRect(this.position.x - this.drawOffsetX, this.position.y - this.drawOffsetY, this.width, this.height);
        ctx.fillStyle = this.statusBarFillColour;
        ctx.fillRect(this.position.x - this.drawOffsetX, this.position.y - this.drawOffsetY, this.width * (this.currentStatus / this.maxStatus), this.height);
    }
    setPosition(position) {
        this.position = position;
        return this;
    }
    setDimensions(width, height) {
        this.width = width;
        this.height = height;
        return this;
    }
    setStatus(currentStatus, maxStatus) {
        this.currentStatus = currentStatus;
        this.maxStatus = maxStatus;
        return this;
    }
    setDrawOffsets(offsetY, offsetX = this.width / 2) {
        this.drawOffsetX = offsetX;
        this.drawOffsetY = offsetY + this.height * 2;
        return this;
    }
    getCurrentStatus() {
        return this.currentStatus;
    }
    increaseStatusBar(increment) {
        this.currentStatus += increment;
    }
    decreaseStatusBar(decrement) {
        this.currentStatus -= decrement;
    }
}
//# sourceMappingURL=StatusBar.js.map