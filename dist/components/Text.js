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
    draw(ctx, information) {
        ctx.strokeStyle = getColour(this.strokeColour, this.alpha);
        ctx.fillStyle = getColour(this.fillColour, this.alpha);
        ctx.font = information.scaledSize.height + "px canterbury";
        ctx.textAlign = this.align;
        ctx.textBaseline = "middle";
        ctx.lineWidth = this.lineWidth;
        ctx.strokeText(information.visual, information.position.x, information.position.y);
        ctx.fillText(information.visual, information.position.x, information.position.y);
    }
    update(information) {
        return;
    }
}
//# sourceMappingURL=Text.js.map