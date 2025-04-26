import { Text } from "./Text.js";
import { oscillate } from "../../utilities/math.js";
export class TextFade extends Text {
    constructor() {
        super();
        this.frequency = 0.1;
        this.amplitude = 1;
        this.alpha = -0.5;
        this.startTime = Date.now();
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        const newAlpha = oscillate(1, this.startTime, this.frequency, this.amplitude);
        this.alpha = newAlpha * -1 + 0.5;
    }
}
//# sourceMappingURL=TextFade.js.map