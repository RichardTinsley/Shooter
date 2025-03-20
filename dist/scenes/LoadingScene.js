import { Scene } from "./Scene.js";
import { loadingBar } from "../components/loadingBar.js";
import { Text } from "../text/text.js";
import { SIZES } from "../constants/sizes.js";
export class LoadingScene extends Scene {
    constructor() {
        super();
        this.loadingBar = new loadingBar({
            position: {
                x: SIZES.GAME_WIDTH_HALF,
                y: SIZES.GAME_HEIGHT - 100,
            },
            assetListLength: 40,
        });
        this.title = new Text("Death Sorcery", {
            x: SIZES.GAME_WIDTH_HALF,
            y: 100,
        }).setSize(120);
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
        this.loadingBar.draw(ctx);
        this.title.draw(ctx);
    }
    update() { }
}
//# sourceMappingURL=LoadingScene.js.map