import { COLOURS } from "../constants/colours.js";
import { TEXT_SIZES } from "../constants/text.js";
import { ANIMATION } from "../constants/animation.js";
export class Text {
    constructor(text, position) {
        this.text = text;
        this.position = position;
        this.colour = COLOURS.WHITE;
        this.alpha = 1;
        this.size = TEXT_SIZES.MENUITEM_TEXT;
        this.align = "center";
        this.baseline = "middle";
        this.lineWidth = Math.floor(this.size / 6);
        this.state = ANIMATION.ANIMATING;
    }
    draw(ctx) {
        switch (this.state) {
            case ANIMATION.ANIMATING:
                ctx.beginPath();
                ctx.fillStyle = `rgba(${this.colour}${this.alpha})`;
                ctx.font = "bold " + this.size + "px canterbury";
                ctx.textAlign = this.align;
                ctx.textBaseline = this.baseline;
                ctx.lineWidth = this.lineWidth;
                ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
                ctx.strokeText(this.text, this.position.x, this.position.y);
                ctx.fillText(this.text, this.position.x, this.position.y);
                ctx.closePath();
                break;
            case ANIMATION.FINISHED:
                break;
        }
    }
    update() { }
    setAlignment(alignment) {
        this.align = alignment;
    }
    setSize(size) {
        this.size = size;
        return this;
    }
}
//# sourceMappingURL=text.js.map