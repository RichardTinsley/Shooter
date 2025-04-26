import { Text } from "./Text.js";
import { oscillate } from "../../utilities/math.js";
export class TextPulsate extends Text {
    constructor() {
        super();
        this.frequency = 1;
        this.amplitude = 1;
        this.startTime = Date.now();
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        this.size += oscillate(1, this.startTime, this.frequency, this.amplitude);
    }
}
//# sourceMappingURL=TextPulsate.js.map