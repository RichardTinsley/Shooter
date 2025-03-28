import { TextFactory } from "../texts/TextFactory.js";
import { SIZES } from "../constants/game.js";
import { assetListLength } from "../utilities/assetLoaders.js";
import { LoadingBar } from "../components/LoadingBar.js";
import { GUI } from "./GUI.js";
export class LoadingGUI extends GUI {
    constructor() {
        super(...arguments);
        this.title = TextFactory.createTitleText();
        this.dslogo = document.getElementById("dslogo");
        this.summoning = TextFactory.createSummongText();
        this.loadingBar = new LoadingBar({
            x: SIZES.GAME_WIDTH_HALF,
            y: SIZES.GAME_HEIGHT - 80,
        }).setMaxStatus(assetListLength);
    }
    draw(ctx) {
        drawIntroLogo(ctx, this.title, this.dslogo);
        this.summoning.draw(ctx);
        this.loadingBar.draw(ctx);
    }
    update() {
        this.summoning.update();
    }
}
export function drawIntroLogo(ctx, title, dslogo) {
    title.draw(ctx);
    ctx.drawImage(dslogo, SIZES.GAME_WIDTH_HALF - dslogo.width / 2, SIZES.GAME_HEIGHT_HALF - dslogo.height / 2);
}
//# sourceMappingURL=LoadingGUI.js.map