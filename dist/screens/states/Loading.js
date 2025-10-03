import { ALL_ASSETS } from "../../constants/assets.js";
import { StatusBar } from "../../GUI/components/StatusBar.js";
import { AssetLoader } from "../../handlers/assetLoader.js";
export class Loading {
    constructor(screen) {
        this.screen = screen;
        this.assetLoader = new AssetLoader();
        this.loadingBar = new StatusBar()
            .setPosition({ x: 100, y: 100 })
            .setDimensions(50, 10)
            .setStatus(30, 40)
            .setDrawOffsets(0);
        this.assetLoaded = (numberOfAssets) => {
        };
        this.assetLoader
            .load(this.assetLoaded)
            .catch((error) => console.error(`Error: "${error.fileName}"`))
            .then(() => console.log(`${ALL_ASSETS.size} assets have been loaded.`));
    }
    draw(ctx) {
        this.loadingBar.draw(ctx);
    }
    update() { }
}
//# sourceMappingURL=Loading.js.map