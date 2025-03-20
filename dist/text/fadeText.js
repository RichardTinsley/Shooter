import { Text } from "./Text.js";
export class FadeText extends Text {
    constructor(text, position) {
        super(text, position);
        this.alpha = 0;
        this.delta = 0.01;
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        this.oscillateAlpha();
    }
    oscillateAlpha() {
        this.alpha += this.delta;
        if (this.alpha <= -0.5 || this.alpha >= 2.0)
            this.delta = -this.delta;
    }
}
//# sourceMappingURL=FadeText.js.map