import { TextBase } from "./TextBase.js";
import { oscillate } from "../utilities/math.js";
export class FadeText extends TextBase {
    constructor(position) {
        super(position);
        this.frequency = 0.1;
        this.amplitude = 0.6;
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        this.alpha = oscillate(1, this.frequency, this.amplitude);
        this.alpha += 0.5;
    }
}
//# sourceMappingURL=FadeText.js.map