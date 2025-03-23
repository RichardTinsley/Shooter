import { TextBase } from "./TextBase.js";
import { oscillate } from "../utilities/math.js";
export class FadeText extends TextBase {
    constructor(position) {
        super(position);
        this.alpha = -0.5;
        this.delta = 0.01;
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        [this.alpha, this.delta] = oscillate(this.alpha, this.delta, -0.5, 1.0);
    }
}
//# sourceMappingURL=FadeText.js.map