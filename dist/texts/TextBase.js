import { ANIMATION } from "../constants/animation.js";
export class TextBase {
    constructor(position) {
        this.position = position;
        this.text = "";
        this.size = 0;
        this.align = "center";
        this.lineWidth = 0;
        this.state = ANIMATION.ANIMATING;
        this.alpha = 1;
    }
    draw(ctx) {
        ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.font = this.size + "px canterbury";
        ctx.textAlign = this.align;
        ctx.textBaseline = "middle";
        ctx.lineWidth = this.lineWidth;
        ctx.strokeText(this.text, this.position.x, this.position.y);
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
    setText(text) {
        this.text = text;
        return this;
    }
    setSize(size) {
        this.size = size;
        return this;
    }
    setAlignment(alignment) {
        this.align = alignment;
        return this;
    }
}
//# sourceMappingURL=TextBase.js.map