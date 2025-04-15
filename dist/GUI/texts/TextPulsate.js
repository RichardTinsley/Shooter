import { Text } from "./Text.js";
import { oscillate } from "../../utilities/math.js";
export class TextPulsate extends Text {
    constructor() {
        super();
        this.frequency = 2;
        this.amplitude = 5;
        this.startTime = Date.now();
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        const newSize = oscillate(1, this.startTime, this.frequency, this.amplitude);
        this.size += newSize;
    }
}
//# sourceMappingURL=TextPulsate.js.map