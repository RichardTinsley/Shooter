import { Component } from "../classes/Component.js";
import { SCREEN_SIZES } from "../constants/screenSizes.js";
export class DSLogo extends Component {
    constructor() {
        super(...arguments);
        this.dslogo = document.getElementById("dslogo");
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SCREEN_SIZES.SCREEN_WIDTH, SCREEN_SIZES.SCREEN_HEIGHT);
        ctx.drawImage(this.dslogo, this.position.x - this.dslogo.width / 2, this.position.y - this.dslogo.height / 2);
    }
    update() { }
}
//# sourceMappingURL=DSLogo.js.map