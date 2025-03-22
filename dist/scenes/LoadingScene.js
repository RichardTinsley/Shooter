var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SceneBase } from "./SceneBase.js";
import { LoadingBar } from "../components/LoadingBar.js";
import { Text } from "../texts/Text.js";
import { FadeText } from "../texts/FadeText.js";
import { SIZES } from "../constants/game.js";
import { TEXT_SIZES } from "../constants/text.js";
import { load, assetListLength, assets } from "../utilities/assetLoaders.js";
export class LoadingScene extends SceneBase {
    constructor() {
        super();
        this.loadingBar = new LoadingBar({
            x: SIZES.GAME_WIDTH_HALF,
            y: SIZES.GAME_HEIGHT - 100,
        }, assetListLength);
        this.title = new Text("Death Sorcery", {
            x: SIZES.GAME_WIDTH_HALF,
            y: 100,
        }).setSize(TEXT_SIZES.TITLE_TEXT);
        this.summoning = new FadeText("Summoning...", {
            x: SIZES.GAME_WIDTH_HALF,
            y: SIZES.GAME_HEIGHT - 150,
        }).setSize(TEXT_SIZES.MENUITEM_TEXT);
        this.dslogo = document.getElementById("dslogo");
        this.assetLoaded = (fileName) => {
            console.log(`${fileName.fileName} Loaded.`);
            this.loadingBar.setAssetsLoaded();
        };
        this.loadAssets();
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SIZES.GAME_WIDTH, SIZES.GAME_HEIGHT);
        this.title.draw(ctx);
        ctx.drawImage(this.dslogo, SIZES.GAME_WIDTH_HALF - this.dslogo.width / 2, SIZES.GAME_HEIGHT_HALF - this.dslogo.height / 2);
        this.loadingBar.draw(ctx);
        this.summoning.draw(ctx);
    }
    update() {
        this.summoning.update();
    }
    loadAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            yield load(this.assetLoaded)
                .catch((error) => {
                console.error(`Error: Unable to load asset "${error.fileName}"`);
            })
                .then(() => {
                console.log(`Asset loading complete. A total of ${assets.size} assets have been loaded.`);
            });
        });
    }
}
//# sourceMappingURL=LoadingScene.js.map