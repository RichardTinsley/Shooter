import { AssetLoader } from "../handlers/assetLoader.js";
import { Screen } from "./Screen.js";
export class LoadingScreen extends Screen {
    constructor(state) {
        super();
        this.state = state;
        this.assetLoader = new AssetLoader();
        this.assetLoaded = () => console.log("OMG");
        this.assetLoader
            .load(this.assetLoaded)
            .catch((error) => console.error(`Error: "${error.fileName}"`))
            .then(() => this.state.setBeginScreen());
    }
}
//# sourceMappingURL=LoadingScreen.js.map