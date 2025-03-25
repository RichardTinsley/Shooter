import { MenuBase } from "./MenuBase.js";
import { TextFactory, TEXTS } from "../texts/TextFactory.js";
import { SIZES } from "../constants/game.js";
export class MenuLoading extends MenuBase {
    constructor() {
        super();
        this.menuItems = [];
        this.title = TextFactory.createText(TEXTS.TITLE);
        this.summoning = TextFactory.createText(TEXTS.SUMMONING);
        this.dslogo = document.getElementById("dslogo");
        this.menuItems.push(this.title);
        this.menuItems.push(this.summoning);
    }
    draw(ctx) {
        super.draw(ctx);
        ctx.drawImage(this.dslogo, SIZES.GAME_WIDTH_HALF - this.dslogo.width / 2, SIZES.GAME_HEIGHT_HALF - this.dslogo.height / 2);
    }
    update() {
        super.update();
    }
}
//# sourceMappingURL=MenuLoading.js.map