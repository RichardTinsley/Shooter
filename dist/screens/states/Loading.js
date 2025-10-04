import { StatusBar } from "../../GUI/components/StatusBar.js";
import { AssetLoader } from "../../handlers/assetLoader.js";
export class Loading {
    constructor(screen) {
        this.screen = screen;
        this.assetLoader = new AssetLoader();
        this.loadingBar = new StatusBar()
            .setPositionPointer({ x: 100, y: 100 })
            .setSizePointer({ width: 40, height: 5 })
            .setStatus(0, this.assetLoader.getAwaitingAssetsSize())
            .initialise();
        this.loadingBar2 = new StatusBar()
            .setPositionPointer({ x: 400, y: 200 })
            .setSizePointer({ width: 400, height: 10 })
            .setStatus(50, 100)
            .initialise();
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
    update() {
        this.loadingBar.update();
    }
}
//# sourceMappingURL=Loading.js.map