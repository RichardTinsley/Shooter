import { SIZES } from "../constants/game.js";
import { COLOURS } from "../constants/colours.js";
import { TextFactory, TEXTS } from "../texts/TextFactory.js";
export class Debug {
    constructor() {
        this.isDebugMode = true;
        this.frames = 0;
        this.startTime = performance.now();
        this.FPSNormal = 0;
        this.FPS = TextFactory.createText(TEXTS.PLAIN);
        this.switchDebugMode = () => {
            this.isDebugMode = !this.isDebugMode;
        };
        this.FPS.setPosition(16, 64);
    }
    draw(ctx) {
        if (!this.isDebugMode)
            return;
        ctx.fillStyle = COLOURS.SHADOW;
        ctx.fillRect(0, SIZES.TILE * 3, SIZES.TILE * 4, SIZES.TILE * 2);
        this.FPS.draw(ctx);
    }
    update() {
        if (!this.isDebugMode)
            return;
        this.calculateFPSNormal();
        this.performanceDebugInfo();
    }
    calculateFPSNormal() {
        const t = performance.now();
        const dt = t - this.startTime;
        if (dt > 1000) {
            this.FPSNormal = (this.frames * 1000) / dt;
            this.frames = 0;
            this.startTime = t;
        }
        this.frames++;
    }
    performanceDebugInfo() {
        const FPS = Math.round(this.FPSNormal * 1000) / 1000;
        this.FPS.setText(`fps: ${FPS}`);
    }
}
//# sourceMappingURL=Debug.js.map