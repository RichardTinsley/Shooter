import { oscillate } from "../../utilities/math.js";
import { COLOURS } from "../../constants/colours.js";
import { TextGlow } from "./TextGlow.js";
export class TextPulsate extends TextGlow {
    constructor() {
        super();
        this.amplitude = 1;
        this.frequency = 1;
        this.glowMaximum = 3;
        this.pulsateFrequency = 1;
        this.pulsateAmplitude = 1;
        this.pulsateStartTime = Date.now();
    }
    draw(ctx) {
        ctx.shadowColor = COLOURS.GLOW;
        ctx.shadowBlur = this.glow;
        super.draw(ctx);
        ctx.shadowBlur = 0;
    }
    update() {
        this.size += oscillate(1, this.pulsateStartTime, this.pulsateFrequency, this.pulsateAmplitude);
        super.update();
    }
}
//# sourceMappingURL=TextPulsate.js.map