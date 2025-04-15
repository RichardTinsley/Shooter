import { Text } from "./Text.js";
import { ANIMATION } from "../../constants/animation.js";
import { oscillate } from "../../utilities/math.js";
import { COLOURS } from "../../constants/colours.js";
export class TextGlow extends Text {
    constructor() {
        super();
        this.lineWidth = 3;
        this.glow = 0;
        this.frequency = 0.7;
        this.amplitude = 0.2;
        this.startTime = Date.now();
    }
    draw(ctx) {
        ctx.shadowColor = COLOURS.GLOW;
        ctx.shadowBlur = this.glow;
        super.draw(ctx);
        ctx.shadowBlur = 0;
    }
    update() {
        switch (this.state) {
            case ANIMATION.MOUSEOVER:
                this.glowChanger();
                this.glow += oscillate(1, this.startTime, this.frequency, this.amplitude);
                break;
            case ANIMATION.NORMAL:
                this.glowChanger();
                break;
        }
    }
    glowChanger() {
        if (this.state === ANIMATION.MOUSEOVER) {
            if (this.glow < 13)
                this.glow++;
        }
        else {
            if (this.glow > 0)
                this.glow--;
        }
    }
}
//# sourceMappingURL=TextGlow.js.map