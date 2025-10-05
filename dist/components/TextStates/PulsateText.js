import { oscillate } from "../../utilities/math.js";
import { NormalText } from "./NormalText.js";
import { COLOURS, getColour } from "../../constants/colours.js";
export class PulsateText extends NormalText {
    constructor(state) {
        super(state);
        this.state = state;
        this.amplitude = 1;
        this.frequency = 1;
        this.glowMaximum = 3;
        this.pulsateFrequency = 1;
        this.pulsateAmplitude = 1;
        this.pulsateStartTime = Date.now();
    }
    draw(ctx) {
        ctx.shadowColor = getColour(COLOURS.TEXT_GLOW);
        super.draw(ctx);
        ctx.shadowBlur = 0;
    }
    update() {
        this.size.height += oscillate(1, this.pulsateStartTime, this.pulsateFrequency, this.pulsateAmplitude);
        super.update();
    }
}
//# sourceMappingURL=PulsateText.js.map