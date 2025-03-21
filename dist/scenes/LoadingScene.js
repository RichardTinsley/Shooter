import { Scene } from "./Scene.js";
import { loadingBar } from "../components/loadingBar.js";
import { Text } from "../text/Text.js";
import { FadeText } from "../text/FadeText.js";
import { SIZES } from "../constants/sizes.js";
import { TEXT_SIZES } from "../constants/text.js";
import { loadAssets, assetListLength } from "../utilities/assetLoaders.js";
export class LoadingScene extends Scene {
    constructor() {
        super();
        this.loadingBar = new loadingBar({
            position: {
                x: SIZES.GAME_WIDTH_HALF,
                y: SIZES.GAME_HEIGHT - 100,
            },
            assetListLength: assetListLength,
        });
        this.title = new Text("Death Sorcery", {
            x: SIZES.GAME_WIDTH_HALF,
            y: 100,
        }).setSize(TEXT_SIZES.TITLE_TEXT);
        this.summoning = new FadeText("Summoning...", {
            x: SIZES.GAME_WIDTH_HALF,
            y: SIZES.GAME_HEIGHT - 150,
        }).setSize(TEXT_SIZES.MENUITEM_TEXT);
        this.assetsLoadedCounter = 0;
        this.assetLoaded = (fileName) => {
            console.log(`${fileName.fileName} Loaded.`);
            this.assetsLoadedCounter++;
        };
        loadAssets(this.assetLoaded, this.assetLoaded);
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
        this.loadingBar.draw(ctx);
        this.title.draw(ctx);
        this.summoning.draw(ctx);
    }
    update() {
        this.summoning.update();
    }
}
//# sourceMappingURL=LoadingScene.js.map