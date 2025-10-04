import { Component } from "../classes/Component.js";
export class Text extends Component {
    constructor() {
        super(...arguments);
        this.align = "center";
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
    update() { }
    setText(text) {
        this.text = text;
        return this;
    }
    getWidth() {
        return this.text.length * (this.size.height / 1.85);
    }
    setAlignment(alignment) {
        this.align = alignment;
        return this;
    }
}
//# sourceMappingURL=Text.js.map