import { GUIComponentFactory } from "../../factories/GUIComponentFactory.js";
import { TextFactory } from "../../factories/TextFactory.js";
import { AssetLoader } from "../../handlers/assetLoader.js";
export class LoadingScreen {
    constructor(state) {
        this.state = state;
        this.assetLoader = new AssetLoader();
        this.DSLogo = GUIComponentFactory.DSLogo();
        this.loadingBar = GUIComponentFactory.LoadingBar(0, this.assetLoader.getAssetFileNameLength());
        this.DSTitle = TextFactory.DSTitle();
        this.summoning = TextFactory.Summoning();
        this.assetLoaded = () => this.loadingBar.increaseCurrentStatus(1);
        this.assetLoader
            .load(this.assetLoaded)
            .catch((error) => console.error(`Error: "${error.fileName}"`))
            .then(() => this.state.setBeginScreen());
    }
    draw(ctx) {
        this.DSLogo.draw(ctx);
        this.DSTitle.draw(ctx);
        this.loadingBar.draw(ctx);
        this.summoning.draw(ctx);
    }
    update() {
        this.summoning.update();
    }
}
//# sourceMappingURL=LoadingScreen.js.map