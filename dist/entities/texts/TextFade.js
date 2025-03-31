import { Text } from "./Text.js";
import { oscillate } from "../../utilities/math.js";
export class TextFade extends Text {
    constructor() {
        super();
        this.frequency = 0.1;
        this.amplitude = 0.6;
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update(event) {
        this.alpha = oscillate(1, this.frequency, this.amplitude);
        this.alpha += 0.5;
    }
}
//# sourceMappingURL=TextFade.js.map