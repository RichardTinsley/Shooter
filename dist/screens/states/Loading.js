import { StatusBar } from "../../GUI/components/StatusBar.js";
import { AssetLoader } from "../../handlers/assetLoader.js";
export class Loading {
    constructor(screen) {
        this.screen = screen;
        this.assetLoader = new AssetLoader();
        this.loadingBar = new StatusBar()
            .setPosition({ x: 100, y: 100 })
            .setDimensions(40, 5)
            .setStatus(0, this.assetLoader.getAwaitingAssetsSize())
            .setDrawOffsets(0);
        this.loadingBar2 = new StatusBar()
            .setPosition({ x: 400, y: 200 })
            .setDimensions(400, 10)
            .setStatus(50, 100)
            .setDrawOffsets(0);
        this.assetLoaded = () => this.loadingBar.increaseStatusBar(1);
        this.assetLoader
            .load(this.assetLoaded)
            .catch((error) => console.error(`Error: "${error.fileName}"`))
            .then(() => console.log("this.screen.beginScreen()"));
    }
    draw(ctx) {
        this.loadingBar.draw(ctx);
        this.loadingBar2.draw(ctx);
    }
    update() { }
}
//# sourceMappingURL=Loading.js.map