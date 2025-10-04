var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as ASSETS from "../constants/assets.js";
export class AssetLoader {
    constructor() { }
    load(assetLoaded) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = ASSETS.NAMES.map(([key, fileName]) => {
                const { asset, eventType } = this.findAssetType(fileName);
                return new Promise((resolve, reject) => {
                    asset.addEventListener(eventType, () => {
                        resolve({ key, asset: asset });
                        assetLoaded();
                    }, { once: true });
                    asset.addEventListener("error", (event) => reject({ fileName, event }));
                    asset.src = fileName;
                });
            });
            return Promise.all(promises).then((loadedAssets) => {
                for (const { key, asset } of loadedAssets) {
                    ASSETS.ALL_ASSETS.set(key, asset);
                }
                console.log(`${ASSETS.ALL_ASSETS.size} assets have been loaded.`);
            });
        });
    }
    findAssetType(fileName) {
        const extension = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
        const type = ASSETS.CHECKER[extension];
        let asset;
        let eventType;
        if (type === ASSETS.TYPES.IMAGE) {
            asset = new Image();
            eventType = "load";
        }
        else if (type === ASSETS.TYPES.SOUND) {
            asset = new Audio();
            eventType = "canplay";
        }
        else {
            throw new TypeError("Error unknown type");
        }
        return { asset, eventType };
    }
    getAssetFileNameLength() {
        return ASSETS.NAMES.length;
    }
}
//# sourceMappingURL=assetLoader.js.map