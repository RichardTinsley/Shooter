var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LoadingBar } from "../components/LoadingBar.js";
import { SIZES } from "../constants/game.js";
import { MenuLoading } from "../menus/MenuLoading.js";
import { assetListLength, load, assets } from "../utilities/assetLoaders.js";
export class SceneLoading {
    constructor(scene) {
        this.scene = scene;
        this.menu = new MenuLoading();
        this.loadingBar = new LoadingBar({
            x: SIZES.GAME_WIDTH_HALF,
            y: SIZES.GAME_HEIGHT - 80,
        }).setMaxStatus(assetListLength);
        this.assetLoaded = (fileName) => {
            console.log(`${fileName.fileName} Loaded.`);
            this.loadingBar.setCurrentStatus(1);
        };
        this.scene.menu = new MenuLoading();
        this.loadAssets();
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
        this.menu.draw(ctx);
        this.loadingBar.draw(ctx);
    }
    update() {
        this.menu.update();
    }
    loadingScene() {
        return;
    }
    loadedScene() {
        this.scene.setState(this.scene.loadedState);
    }
    loadAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            yield load(this.assetLoaded)
                .catch((error) => {
                console.error(`Error: Unable to load asset "${error.fileName}"`);
            })
                .then(() => {
                console.log(`A total of ${assets.size} assets have been loaded.`);
                this.scene.getState().loadedScene();
            });
        });
    }
}
//# sourceMappingURL=SceneLoading.js.map