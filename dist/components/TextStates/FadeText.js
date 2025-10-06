import { oscillate } from "../../utilities/math.js";
import { NormalText } from "./NormalText.js";
export class FadeText extends NormalText {
    constructor(state) {
        super(state);
        this.state = state;
        this.frequency = 0.1;
        this.alpha = -0.5;
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        const newAlpha = oscillate(1, this.startTime, this.frequency, this.amplitude);
        this.alpha = newAlpha * -1 + 0.5;
    }
}
//# sourceMappingURL=FadeText.js.map