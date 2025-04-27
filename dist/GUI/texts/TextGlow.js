import { Text } from "./Text.js";
import { STATE } from "../../constants/states.js";
import { oscillate } from "../../utilities/math.js";
import { COLOURS } from "../../constants/colours.js";
export class TextGlow extends Text {
    constructor() {
        super();
        this.lineWidth = 3;
        this.glow = 0;
        this.glowMaximum = 13;
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
            case STATE.MOUSEOVER:
                this.glowChanger();
                this.glow += oscillate(1, this.startTime, this.frequency, this.amplitude);
                break;
            case STATE.MOUSEOFF:
                this.glowChanger();
                break;
        }
    }
    glowChanger() {
        if (this.state === STATE.MOUSEOVER) {
            if (this.glow < this.glowMaximum)
                this.glow += 2;
        }
        else {
            if (this.glow > 0)
                this.glow--;
        }
    }
}
//# sourceMappingURL=TextGlow.js.map