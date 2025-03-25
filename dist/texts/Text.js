import { oscillate } from "../utilities/math.js";
export class Text {
    constructor(position) {
        this.position = position;
        this.text = "";
        this.size = 0;
        this.align = "center";
        this.lineWidth = 0;
        this.state = 0;
        this.alpha = 1;
        this.shadowBlur = 0;
        this.frequency = 0;
        this.amplitude = 0;
    }
    draw(ctx) {
        ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.font = this.size + "px canterbury";
        ctx.textAlign = this.align;
        ctx.textBaseline = "middle";
        ctx.lineWidth = this.lineWidth;
        ctx.shadowColor = "#d53";
        ctx.shadowBlur = this.shadowBlur;
        ctx.strokeText(this.text, this.position.x, this.position.y);
        ctx.fillText(this.text, this.position.x, this.position.y);
        ctx.shadowBlur = 0;
    }
    update() {
        switch (this.state) {
            case 0:
                break;
            case 1:
                this.alpha = oscillate(1, this.frequency, this.amplitude);
                this.alpha += 0.5;
                break;
            case 2:
                this.shadowBlur += oscillate(1, this.frequency, this.amplitude);
                break;
        }
    }
    setPosition(x = 0, y = 0) {
        if (x)
            this.position.x = x;
        if (y)
            this.position.y = y;
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
    setFade() {
        this.frequency = 0.1;
        this.amplitude = 0.6;
        this.state = 1;
        return this;
    }
    setGlow() {
        this.lineWidth = 3;
        this.shadowBlur = 13;
        this.frequency = 0.7;
        this.amplitude = 0.2;
        this.state = 2;
        return this;
    }
}
//# sourceMappingURL=Text.js.map