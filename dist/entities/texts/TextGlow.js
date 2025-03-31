import { Text } from "./Text.js";
import { ANIMATION } from "../../constants/animation.js";
import { oscillate } from "../../utilities/math.js";
export class TextGlow extends Text {
    constructor() {
        super();
        this.lineWidth = 3;
        this.glow = 13;
        this.frequency = 0.7;
        this.amplitude = 0.2;
    }
    draw(ctx) {
        ctx.shadowColor = "#d53";
        ctx.shadowBlur = this.glow;
        super.draw(ctx);
        ctx.shadowBlur = 0;
    }
    update(event) {
        switch (this.state) {
            case ANIMATION.ANIMATING:
                this.glow += oscillate(1, this.frequency, this.amplitude);
                break;
            case ANIMATION.FINISHED:
                break;
        }
    }
}
//# sourceMappingURL=TextGlow.js.map