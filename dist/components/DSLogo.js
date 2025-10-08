import { SCREEN } from "../constants/screenSizes.js";
export class DSLogo {
    constructor() {
        this.dslogo = document.getElementById("dslogo");
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    }
    update() { }
    setDrawOffsets(drawOffsets) {
        return this;
    }
}
//# sourceMappingURL=DSLogo.js.map