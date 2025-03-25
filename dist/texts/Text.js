export class Text {
    constructor() {
        this.text = "";
        this.size = 0;
        this.align = "center";
        this.lineWidth = 0;
        this.alpha = 1;
        this.state = 0;
        this.position = { x: 0, y: 0 };
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
    setPosition(x, y) {
        if (x)
            this.position.x = x;
        if (y)
            this.position.y = y;
        return this;
    }
    getPosition() {
        return this.position;
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
    setState(state) {
        this.state = state;
        return this;
    }
}
//# sourceMappingURL=Text.js.map