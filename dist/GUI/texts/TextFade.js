import { Text } from "./Text.js";
import { oscillate } from "../../utilities/math.js";
export class TextFade extends Text {
    constructor() {
        super();
        this.frequency = 0.1;
        this.amplitude = 1;
        this.startTime = Date.now();
        this.alpha = -0.5;
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        this.alpha = oscillate(0, this.startTime, this.frequency, this.amplitude);
    }
}
//# sourceMappingURL=TextFade.js.map