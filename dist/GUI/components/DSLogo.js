import { SCREEN_SIZES } from "../../constants/screenSizes.js";
export class DSLogo {
    constructor() {
        this.dslogo = document.getElementById("dslogo");
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SCREEN_SIZES.SCREEN_WIDTH, SCREEN_SIZES.SCREEN_HEIGHT);
        ctx.drawImage(this.dslogo, SCREEN_SIZES.SCREEN_WIDTH_HALF - this.dslogo.width / 2, SCREEN_SIZES.SCREEN_HEIGHT * 0.55 - this.dslogo.height / 2);
    }
}
//# sourceMappingURL=DSLogo.js.map