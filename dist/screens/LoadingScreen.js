import { TextFactory } from "../texts/TextFactory.js";
import { SIZES } from "../constants/game.js";
import { LoadScreenBase } from "./LoadScreenBase.js";
import { assetListLength } from "../utilities/assetLoaders.js";
import { LoadingBar } from "../components/LoadingBar.js";
export class LoadingScreen extends LoadScreenBase {
    constructor() {
        super();
        this.summoning = TextFactory.createSummongText();
        this.loadingBar = new LoadingBar({
            x: SIZES.GAME_WIDTH_HALF,
            y: SIZES.GAME_HEIGHT - 80,
        }).setMaxStatus(assetListLength);
    }
    draw(ctx) {
        super.draw(ctx);
        this.summoning.draw(ctx);
        this.loadingBar.draw(ctx);
    }
    update() {
        this.summoning.update();
    }
}
//# sourceMappingURL=LoadingScreen.js.map