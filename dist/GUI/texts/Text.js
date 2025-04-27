import { STATE } from "../../constants/states.js";
export class Text {
    constructor() {
        this.align = "center";
        this.alpha = 1;
        this.state = STATE.FINISHED;
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
    getText() {
        return this.text;
    }
    setText(text) {
        this.text = text;
        return this;
    }
    getPosition() {
        return this.position;
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        return this;
    }
    getHeight() {
        return this.size;
    }
    setHeight(size) {
        this.size = size;
        return this;
    }
    getWidth() {
        return this.getText().length * (this.getHeight() / 1.85);
    }
    setAlignment(alignment) {
        this.align = alignment;
        return this;
    }
    setState(state) {
        this.state = state;
        return this;
    }
}
//# sourceMappingURL=Text.js.map