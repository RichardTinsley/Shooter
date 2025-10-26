import { ComponentBaseClass } from "./ComponentBaseClass.js";
import { COLOURS, getColour } from "../constants/colours.js";
export class TextComponent extends ComponentBaseClass {
    constructor() {
        super(...arguments);
        this.align = "center";
        this.alpha = 1;
        this.strokeColour = COLOURS.BLACK;
        this.fillColour = COLOURS.WHITE;
    }
    draw(ctx) {
        ctx.strokeStyle = getColour(this.strokeColour, this.alpha);
        ctx.fillStyle = getColour(this.fillColour, this.alpha);
        ctx.font = this.information.size.height + "px canterbury";
        ctx.textAlign = this.align;
        ctx.textBaseline = "middle";
        ctx.lineWidth = this.lineWidth;
        ctx.strokeText(this.information.visual, this.information.position.x, this.information.position.y);
        ctx.fillText(this.information.visual, this.information.position.x, this.information.position.y);
    }
    update() {
        return;
    }
}
//# sourceMappingURL=Text.js.map