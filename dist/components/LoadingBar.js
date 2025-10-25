import { AssetLoader } from "../handlers/assetLoader.js";
import { StatusBarComponent } from "./StatusBar.js";
export class LoadingBarComponent extends StatusBarComponent {
    constructor() {
        super();
        this.assetLoader = new AssetLoader();
        this.assetLoaded = () => this.increaseCurrentStatus(1);
        this.setStatus(0, this.assetLoader.getAssetCount());
        this.assetLoader
            .load(this.assetLoaded)
            .catch((error) => console.error(`Error: "${error.fileName}"`))
            .then(() => console.log("OMG"));
    }
}
//# sourceMappingURL=LoadingBar.js.map