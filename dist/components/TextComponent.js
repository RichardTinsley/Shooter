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
    draw(ctx, coordinates) {
        ctx.strokeStyle = getColour(this.strokeColour, this.alpha);
        ctx.fillStyle = getColour(this.fillColour, this.alpha);
        ctx.font = coordinates.size.height + "px canterbury";
        ctx.textAlign = this.align;
        ctx.textBaseline = "middle";
        ctx.lineWidth = this.lineWidth;
        ctx.strokeText(this.text, coordinates.position.x, coordinates.position.y);
        ctx.fillText(this.text, coordinates.position.x, coordinates.position.y);
    }
    update(coordinates) {
        return;
    }
    setText(text) {
        this.text = text;
        return this;
    }
}
//# sourceMappingURL=TextComponent.js.map