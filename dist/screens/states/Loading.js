import { GUIComponentFactory } from "../../factories/GUIComponentFactory.js";
import { TextFactory } from "../../factories/TextFactory.js";
import { AssetLoader } from "../../handlers/assetLoader.js";
export class Loading {
    constructor(state) {
        this.state = state;
        this.assetLoader = new AssetLoader();
        this.DSLogo = GUIComponentFactory.DSLogo();
        this.loadingBar = GUIComponentFactory.LoadingBar(0, this.assetLoader.getAssetFileNameLength());
        this.deathSorceryTitle = TextFactory.DeathSorceryTitle();
        this.assetLoaded = () => this.loadingBar.increaseCurrentStatus(1);
        this.assetLoader
            .load(this.assetLoaded)
            .catch((error) => console.error(`Error: "${error.fileName}"`))
            .then(() => console.log("this.state.beginScreen()"));
    }
    draw(ctx) {
        this.DSLogo.draw(ctx);
        this.loadingBar.draw(ctx);
        this.deathSorceryTitle.draw(ctx);
    }
    update() { }
}
//# sourceMappingURL=Loading.js.map