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
export function loadAssets(switchScreens, assetLoaded) {
    return __awaiter(this, void 0, void 0, function* () {
        yield load(ASSETS.ASSET_LIST, assetLoaded)
            .catch((error) => {
            console.error(`Error: Unable to load asset "${error.fileName}"`);
        })
            .then(() => {
            console.log(`Asset loading complete. A total of ${assets.size} assets have been loaded.`);
        });
    });
}
function load(assetArray, onComplete) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = assetArray.map(([key, fileName]) => {
            const extension = fileName
                .substring(fileName.lastIndexOf(".") + 1)
                .toLowerCase();
            const type = ASSETS.ASSET_TYPE_LOOKUP[extension];
            if (type === ASSETS.ASSET_TYPE.IMAGE) {
                return loadImage(key, fileName.toString(), onComplete);
            }
            else if (type === ASSETS.ASSET_TYPE.SOUND) {
                return loadSound(key, String(fileName), onComplete);
            }
            else {
                throw new TypeError("Error unknown type");
            }
        });
        return Promise.all(promises).then((loadedAssets) => {
            for (const assetT of loadedAssets) {
                console.log(assetT);
            }
        });
    });
}
function loadImage(key, fileName, onComplete) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => {
            resolve({ key, asset: image });
            if (typeof onComplete === "function")
                onComplete({ fileName, image });
        }, { once: true });
        image.addEventListener("error", (event) => {
            reject({ fileName, event });
            console.log("OMGFAIL");
        });
        image.src = fileName;
    });
}
function loadSound(key, fileName, onComplete) {
    return new Promise((resolve, reject) => {
        const sound = new Audio();
        sound.addEventListener("canplay", () => {
            resolve({ key, asset: sound });
            if (typeof onComplete === "function")
                onComplete({ fileName, sound });
        }, { once: true });
        sound.addEventListener("error", (event) => reject({ fileName, event }));
        sound.src = fileName;
    });
}
//# sourceMappingURL=assetLoaders.js.map