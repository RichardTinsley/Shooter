import { COLOURS } from "../../constants/colours.js";
import { drawRectangle } from "../../utilities/drawShapes.js";
import { StatusBar } from "./StatusBar.js";
export class HealthBar extends StatusBar {
    constructor() {
        super();
        this.statusBarHeight = 3;
        this.lineWidth = 6;
        this.healthBarColour = COLOURS.BRIGHT_GREEN;
        this.maxStatus = 100;
        this.currentStatus = 100;
    }
    draw(ctx) {
        this.position.x -= this.statusBarLength / 2;
        ctx.lineJoin = this.lineJoin;
        super.draw(ctx);
        ctx.lineWidth = 2;
        drawRectangle(ctx, this.position, this.statusBarLength, this.statusBarHeight, COLOURS.NONE, COLOURS.BLACK);
        drawRectangle(ctx, this.position, this.statusBarLength * (this.currentStatus / this.maxStatus), this.statusBarHeight, this.healthBarColour, COLOURS.NONE);
    }
    setCurrentStatus(damage) {
        this.currentStatus -= damage;
        if (this.currentStatus < 0)
            this.currentStatus = 0;
        if (this.currentStatus < this.maxStatus * 33)
            this.healthBarColour = COLOURS.RED;
    }
    setWidth(length) {
        this.statusBarLength = length / 1.5;
        return this;
    }
}
//# sourceMappingURL=HealthBar.js.map