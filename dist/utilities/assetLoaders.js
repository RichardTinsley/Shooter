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
export const assets = new Map();
export const assetListLength = ASSETS.ASSET_LIST.length;
export function load(assetLoaded) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = ASSETS.ASSET_LIST.map(([key, fileName]) => {
            const extension = fileName
                .substring(fileName.lastIndexOf(".") + 1)
                .toLowerCase();
            const type = ASSETS.ASSET_TYPE_LOOKUP[extension];
            if (type === ASSETS.ASSET_TYPE.IMAGE) {
                return loadImage(key, fileName.toString(), assetLoaded);
            }
            else if (type === ASSETS.ASSET_TYPE.SOUND) {
                return loadSound(key, fileName.toString(), assetLoaded);
            }
            else {
                throw new TypeError("Error unknown type");
            }
        });
        return Promise.all(promises).then((loadedAssets) => {
            for (const { key, asset } of loadedAssets) {
                assets.set(key, asset);
            }
        });
    });
}
function loadImage(key, fileName, assetLoaded) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => {
            resolve({ key, asset: image });
            if (typeof assetLoaded === "function")
                assetLoaded({ fileName, image });
        }, { once: true });
        image.addEventListener("error", (event) => reject({ fileName, event }));
        image.src = fileName;
    });
}
function loadSound(key, fileName, assetLoaded) {
    return new Promise((resolve, reject) => {
        const sound = new Audio();
        sound.addEventListener("canplay", () => {
            resolve({ key, asset: sound });
            if (typeof assetLoaded === "function")
                assetLoaded({ fileName, sound });
        }, { once: true });
        sound.addEventListener("error", (event) => reject({ fileName, event }));
        sound.src = fileName;
    });
}
//# sourceMappingURL=assetLoaders.js.map