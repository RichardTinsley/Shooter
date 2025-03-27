var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LoadedScreen } from "../screens/LoadedScreen.js";
import { load, assets } from "../utilities/assetLoaders.js";
export class SceneLoading {
    constructor(scene) {
        this.scene = scene;
        this.assetLoaded = (fileName) => {
            console.log(`${fileName.fileName} Loaded.`);
            this.scene.screen.loadingBar.setCurrentStatus(1);
        };
        this.loadAssets();
    }
    draw(ctx) {
        this.scene.screen.draw(ctx);
    }
    update() {
        this.scene.screen.update();
    }
    loadAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            yield load(this.assetLoaded)
                .catch((error) => {
                console.error(`Error: Unable to load asset "${error.fileName}"`);
            })
                .then(() => {
                console.log(`A total of ${assets.size} assets have been loaded.`);
                this.scene.screen = new LoadedScreen();
                this.scene.setState(this.scene.loadedState);
            });
        });
    }
}
//# sourceMappingURL=SceneLoading.js.map