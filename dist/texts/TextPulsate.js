import { Text } from "./Text.js";
import { oscillate } from "../utilities/math.js";
export class TextPulsate extends Text {
    constructor() {
        super();
        this.frequency = 2;
        this.amplitude = 5;
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        this.size = oscillate(1, this.frequency, this.amplitude);
        this.size += 80;
    }
}
//# sourceMappingURL=TextPulsate.js.map