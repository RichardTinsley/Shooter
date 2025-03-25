var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Scene } from "./Scene.js";
import { LoadingBar } from "../components/LoadingBar.js";
import { SIZES } from "../constants/game.js";
import { load, assetListLength, assets } from "../utilities/assetLoaders.js";
import { MenuLoading } from "../menus/MenuLoading.js";
export class SceneLoading extends Scene {
    constructor() {
        super();
        this.menu = new MenuLoading();
        this.loadingBar = new LoadingBar({
            x: SIZES.GAME_WIDTH_HALF,
            y: SIZES.GAME_HEIGHT - 80,
        }).setMaxStatus(assetListLength);
        this.assetLoaded = (fileName) => {
            console.log(`${fileName.fileName} Loaded.`);
            this.loadingBar.setCurrentStatus(1);
        };
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
    loadAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            yield load(this.assetLoaded)
                .catch((error) => {
                console.error(`Error: Unable to load asset "${error.fileName}"`);
            })
                .then(() => {
                console.log(`A total of ${assets.size} assets have been loaded.`);
            });
        });
    }
}
//# sourceMappingURL=SceneLoading.js.map