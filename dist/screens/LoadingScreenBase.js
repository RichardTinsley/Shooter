import { TextFactory } from "../texts/TextFactory.js";
import { SIZES } from "../constants/game.js";
import { ScreenBase } from "./ScreenBase.js";
export class LoadingScreenBase extends ScreenBase {
    constructor() {
        super(...arguments);
        this.title = TextFactory.createTitleText();
        this.dslogo = document.getElementById("dslogo");
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
        this.title.draw(ctx);
        ctx.drawImage(this.dslogo, SIZES.GAME_WIDTH_HALF - this.dslogo.width / 2, SIZES.GAME_HEIGHT_HALF - this.dslogo.height / 2);
    }
    update() { }
}
//# sourceMappingURL=LoadingScreenBase.js.map