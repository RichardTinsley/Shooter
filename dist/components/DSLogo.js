import { SCREEN } from "../../src/constants/screenSizes.js";
export class DSLogo {
    constructor() {
        this.dslogo = document.getElementById("dslogo");
    }
    draw(ctx, coordinates) {
        ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
        ctx.drawImage(this.dslogo, coordinates.position.x - this.dslogo.width / 2, coordinates.position.y - this.dslogo.height / 2);
    }
    update(coordinates) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=DSLogo.js.map