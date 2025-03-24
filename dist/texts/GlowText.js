import { TextBase } from "./TextBase.js";
import { ANIMATION } from "../constants/animation.js";
import { oscillate } from "../utilities/math.js";
export class GlowText extends TextBase {
    constructor(position) {
        super(position);
        this.position = position;
        this.glow = -0.5;
        this.delta = 0.1;
        this.lineWidth = 3;
    }
    draw(ctx) {
        ctx.shadowColor = "#d53";
        ctx.shadowBlur = this.glow;
        super.draw(ctx);
        ctx.shadowBlur = 0;
    }
    update() {
        switch (this.state) {
            case ANIMATION.ANIMATING:
                [this.glow, this.delta] = oscillate(this.glow, this.delta, -0.5, 8);
                break;
            case ANIMATION.FINISHED:
                break;
        }
    }
}
//# sourceMappingURL=GlowText.js.map