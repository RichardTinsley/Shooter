var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GUIFactory } from "../GUI/GUIFactory.js";
import { load, assetListLength } from "../utilities/assetLoaders.js";
import { ALL_ASSETS } from "../constants/assets.js";
export class LoadingState {
    constructor(state) {
        this.state = state;
        this.gui = GUIFactory.createLoadingGUI(this.state);
        this.assetLoaded = (fileName) => {
            this.gui.loadingBar.setCurrentStatus(1);
            console.log(`${fileName.fileName} Loaded.`);
            if (this.gui.loadingBar.getCurrentStatus() === assetListLength)
                this.state.setBeginState();
        };
        this.loadAssets();
    }
    draw(ctx) {
        this.gui.draw(ctx);
    }
    update(event) {
        this.gui.update(event);
    }
    loadAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            yield load(this.assetLoaded)
                .catch((error) => {
                console.error(`Error: Unable to load asset "${error.fileName}"`);
            })
                .then(() => {
                console.log(`A total of ${ALL_ASSETS.size} assets have been loaded.`);
            });
        });
    }
}
//# sourceMappingURL=LoadingState.js.map