import { TEXT_SIZES } from "../constants/text.js";
import { ANIMATION } from "../constants/animation.js";
export class Text {
    constructor(text, position) {
        this.text = text;
        this.position = position;
        this.size = TEXT_SIZES.MENUITEM_TEXT;
        this.align = "center";
        this.lineWidth = Math.floor(this.size / 6);
        this.state = ANIMATION.ANIMATING;
        this.alpha = 1;
    }
    draw(ctx) {
        switch (this.state) {
            case ANIMATION.ANIMATING:
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                ctx.font = "bold " + this.size + "px canterbury";
                ctx.textAlign = this.align;
                ctx.textBaseline = "middle";
                ctx.lineWidth = this.lineWidth;
                ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
                ctx.strokeText(this.text, this.position.x, this.position.y);
                ctx.fillText(this.text, this.position.x, this.position.y);
                break;
            case ANIMATION.FINISHED:
                break;
        }
    }
    update() { }
    setAlignment(alignment) {
        this.align = alignment;
        return this;
    }
    setSize(size) {
        this.size = size;
        return this;
    }
}
//# sourceMappingURL=Text.js.map