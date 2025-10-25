import { getColour, COLOURS } from "../constants/colours.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";
export class StatusBarComponent extends ComponentBaseClass {
    constructor() {
        super(...arguments);
        this.statusBarColour = getColour(COLOURS.WHITE);
    }
    draw(ctx, coordinates) {
        ctx.lineJoin = "round";
        this.drawBorder(ctx, getColour(COLOURS.WHITE), coordinates, coordinates.size.height);
        this.drawBox(ctx, getColour(COLOURS.BLACK), coordinates, coordinates.size.width);
        this.drawBorder(ctx, getColour(COLOURS.BLACK), coordinates, coordinates.size.height / 2);
        this.drawBox(ctx, this.statusBarColour, coordinates, coordinates.size.width * (this.currentStatus / this.maxStatus));
    }
    drawBox(ctx, colour, coordinates, width) {
        ctx.fillStyle = colour;
        ctx.fillRect(coordinates.position.x - coordinates.halfWidth, coordinates.position.y - coordinates.size.height, width, coordinates.size.height);
    }
    drawBorder(ctx, lineColour, coordinates, lineWidth) {
        ctx.strokeStyle = lineColour;
        ctx.lineWidth = lineWidth;
        ctx.strokeRect(coordinates.position.x - coordinates.halfWidth, coordinates.position.y - coordinates.size.height, coordinates.size.width, coordinates.size.height);
    }
    update() { }
    setStatus(currentStatus, maxStatus) {
        this.currentStatus = currentStatus;
        this.maxStatus = maxStatus;
        return this;
    }
    setStatusBarColour(colour) {
        this.statusBarColour = colour;
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