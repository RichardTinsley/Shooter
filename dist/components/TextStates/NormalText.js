import { Component } from "../../classes/Component.js";
import { getColour, COLOURS } from "../../constants/colours.js";
export class NormalText extends Component {
    constructor(state) {
        super();
        this.state = state;
        this.align = "center";
        this.alpha = 1;
        this.frequency = 1;
        this.amplitude = 1;
        this.startTime = Date.now();
    }
    draw(ctx) {
        ctx.strokeStyle = getColour(COLOURS.BLACK, this.alpha);
        ctx.fillStyle = getColour(COLOURS.WHITE, this.alpha);
        ctx.font = this.size.height + "px canterbury";
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
//# sourceMappingURL=NormalText.js.map