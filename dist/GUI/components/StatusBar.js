import { COLOURS, getColour } from "../../constants/colours.js";
export const JOINS = {
    round: "round",
    bevel: "bevel",
    miter: "miter",
};
export class StatusBar {
    constructor() {
        this.lineJoin = JOINS.bevel;
        this.outerBorderWidth = 5;
        this.innerBorderWidth = this.outerBorderWidth / 2;
        this.statusBarFillColour = getColour(COLOURS.GREEN);
        this.boxFillColour = getColour(COLOURS.BLACK);
        this.borderColour = getColour(COLOURS.WHITE);
    }
    draw(ctx) {
        ctx.lineJoin = this.lineJoin;
        this.drawBorder(ctx, this.borderColour, this.outerBorderWidth);
        this.drawBox(ctx, this.boxFillColour);
        this.drawBorder(ctx, this.boxFillColour, this.innerBorderWidth);
        this.drawBox(ctx, this.statusBarFillColour, this.width * (this.currentStatus / this.maxStatus));
    }
    drawBox(ctx, colour, width = this.width) {
        ctx.fillStyle = colour;
        ctx.fillRect(this.position.x - this.drawOffsetX, this.position.y - this.drawOffsetY, width, this.height);
    }
    drawBorder(ctx, lineColour, lineWidth) {
        ctx.strokeStyle = lineColour;
        ctx.lineWidth = lineWidth;
        ctx.strokeRect(this.position.x - this.drawOffsetX, this.position.y - this.drawOffsetY, this.width, this.height);
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
    setLineJoins(lineJoin) {
        this.lineJoin = lineJoin;
        return this;
    }
    setBorderWidths(outerBorderWidth) {
        this.outerBorderWidth = outerBorderWidth;
        this.innerBorderWidth = outerBorderWidth / 2;
        return this;
    }
}
//# sourceMappingURL=StatusBar.js.map