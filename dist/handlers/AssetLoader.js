var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ASSET_LIST, ALL_ASSETS } from "../constants/assets.js";
export const assetListLength = ASSET_LIST.length;
const ASSET_TYPE = {
    IMAGE: "image",
    SOUND: "sound",
};
const ASSET_TYPE_LOOKUP = {
    png: ASSET_TYPE.IMAGE,
    mp3: ASSET_TYPE.SOUND,
    ogg: ASSET_TYPE.SOUND,
};
export class AssetLoader {
    constructor() { }
    load(assetLoaded) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = ASSET_LIST.map(([key, fileName]) => {
                const { newAsset, eventListenerType } = this.findAssetType(fileName);
                return new Promise((resolve, reject) => {
                    newAsset.addEventListener(eventListenerType, () => {
                        resolve({ key, asset: newAsset });
                        assetLoaded({ fileName, newAsset });
                    }, { once: true });
                    newAsset.addEventListener("error", (event) => reject({ fileName, event }));
                    newAsset.src = fileName;
                });
            });
            return Promise.all(promises).then((loadedAssets) => {
                for (const { key, asset } of loadedAssets) {
                    ALL_ASSETS.set(key, asset);
                }
            });
        });
    }
    findAssetType(fileName) {
        const extension = fileName
            .substring(fileName.lastIndexOf(".") + 1)
            .toLowerCase();
        const type = ASSET_TYPE_LOOKUP[extension];
        let newAsset;
        let eventListenerType;
        if (type === ASSET_TYPE.IMAGE) {
            newAsset = new Image();
            eventListenerType = "load";
        }
        else if (type === ASSET_TYPE.SOUND) {
            newAsset = new Audio();
            eventListenerType = "canplay";
        }
        else {
            throw new TypeError("Error unknown type");
        }
        return { newAsset, eventListenerType };
    }
}
//# sourceMappingURL=AssetLoader.js.map