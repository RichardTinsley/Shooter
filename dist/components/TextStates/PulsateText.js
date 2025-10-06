import { oscillate } from "../../utilities/math.js";
import { NormalText } from "./NormalText.js";
export class PulsateText extends NormalText {
    constructor(state) {
        super(state);
        this.state = state;
        this.amplitude = 0.25;
        this.frequency = 0.5;
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        this.size.height += oscillate(1, this.startTime, this.frequency, this.amplitude);
    }
}
//# sourceMappingURL=PulsateText.js.map