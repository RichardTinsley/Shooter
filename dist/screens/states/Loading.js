import { SCREEN_SIZES } from "../../constants/screenSizes.js";
import { StatusBar } from "../../GUI/components/StatusBar.js";
import { AssetLoader } from "../../handlers/assetLoader.js";
export class Loading {
    constructor(screen) {
        this.screen = screen;
        this.assetLoader = new AssetLoader();
        this.dslogo = document.getElementById("dslogo");
        this.loadingBar = new StatusBar()
            .setSharedPosition({ x: SCREEN_SIZES.SCREEN_WIDTH_HALF, y: SCREEN_SIZES.SCREEN_HEIGHT * 0.9 })
            .setSharedSize({ width: SCREEN_SIZES.SCREEN_WIDTH / 3, height: 10 })
            .setDrawOffsets(0)
            .setStatus(0, this.assetLoader.getAwaitingAssetsSize());
        this.assetLoaded = () => this.loadingBar.increaseCurrentStatus(1);
        this.assetLoader
            .load(this.assetLoaded)
            .catch((error) => console.error(`Error: "${error.fileName}"`))
            .then(() => console.log("this.screen.beginScreen()"));
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SCREEN_SIZES.SCREEN_WIDTH, SCREEN_SIZES.SCREEN_HEIGHT);
        this.loadingBar.draw(ctx);
        ctx.drawImage(this.dslogo, SCREEN_SIZES.SCREEN_WIDTH_HALF - this.dslogo.width / 2, SCREEN_SIZES.SCREEN_HEIGHT_HALF - this.dslogo.height / 2);
    }
    update() { }
}
//# sourceMappingURL=Loading.js.map