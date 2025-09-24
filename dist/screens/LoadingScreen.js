var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { load, assetListLength } from "../utilities/assetLoaders.js";
import { ALL_ASSETS } from "../constants/assets.js";
import { SIZES } from "../constants/sizes.js";
import { TextFactory } from "../GUI/texts/TextFactory.js";
import { LoadingBar } from "../GUI/components/LoadingBar.js";
import { deathSorceryLogoLayout } from "../GUI/layouts/deathSorceryLogoLayout.js";
export class LoadingScreen {
    constructor(buttons) {
        this.buttons = buttons;
        this.logo = new deathSorceryLogoLayout();
        this.summoning = TextFactory.textFade()
            .setPosition({ x: SIZES.GAME_WIDTH_HALF, y: SIZES.GAME_HEIGHT - 140 })
            .setText("Summoning...")
            .setHeight(SIZES.TEXT_MENUITEM);
        this.loadingBar = new LoadingBar(assetListLength)
            .setPosition({
            x: SIZES.GAME_WIDTH_HALF,
            y: SIZES.GAME_HEIGHT - 80,
        })
            .setDrawOffsets(0);
        this.assetLoaded = (fileName) => {
            this.loadingBar.setCurrentStatus(1);
            console.log(`${fileName.fileName} Loaded.`);
            if (this.loadingBar.getCurrentStatus() === assetListLength)
                this.buttons.beginScreen();
        };
        this.loadAssets();
    }
    draw(ctx) {
        this.logo.draw(ctx);
        this.summoning.draw(ctx);
        this.loadingBar.draw(ctx);
    }
    update() {
        this.summoning.update();
    }
    loadAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            yield load(this.assetLoaded)
                .catch((error) => console.error(`Error: "${error.fileName}"`))
                .then(() => console.log(`${ALL_ASSETS.size} assets have been loaded.`));
        });
    }
}
//# sourceMappingURL=LoadingScreen.js.map