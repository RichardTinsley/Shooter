import { TextFactory } from "../entities/texts/TextFactory.js";
import { SIZES } from "../constants/game.js";
import { assetListLength } from "../utilities/assetLoaders.js";
import { LoadingBar } from "./components/LoadingBar.js";
import { GUI } from "./GUI.js";
export class LoadingGUI extends GUI {
    constructor(state) {
        super(state);
        this.state = state;
        this.title = TextFactory.text()
            .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: 100 })
            .setText("Death Sorcery")
            .setSize(SIZES.TEXT_TITLE);
        this.dslogo = document.getElementById("dslogo");
        this.summoning = TextFactory.textFade()
            .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 130 })
            .setText("Summoning...")
            .setSize(SIZES.TEXT_MENUITEM);
        this.loadingBar = new LoadingBar()
            .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 80 })
            .setMaxStatus(assetListLength);
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