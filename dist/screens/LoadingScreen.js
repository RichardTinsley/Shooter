import { GUIEntityFactory } from "../factories/GUIEntityFactory.js";
import { AssetLoader } from "../handlers/AssetLoader.js";
import { Screen } from "./Screen.js";
export class LoadingScreen extends Screen {
    constructor(state) {
        super();
        this.state = state;
        this.assetLoader = new AssetLoader();
        this.assetLoaded = () => this.entities[0].information.increaseCurrentStatus(1);
        const entityFactory = new GUIEntityFactory();
        this.entities.push(entityFactory.LoadingBar());
        this.entities.push(entityFactory.DSLogo());
        this.entities.push(entityFactory.DSTitle());
        this.entities.push(entityFactory.Summoning());
        this.entities[0].information.setStatus(0, this.assetLoader.getAssetCount());
        this.assetLoader
            .load(this.assetLoaded)
            .catch((error) => console.error(`Error: "${error.fileName}"`));
    }
    draw(ctx) {
        this.clearScreen(ctx);
        super.draw(ctx);
    }
}
//# sourceMappingURL=LoadingScreen.js.map