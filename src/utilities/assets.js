import { ASSET_TYPE_LOOKUP, ASSET_TYPE, ASSET_LIST } from "../constants/assets.js";
import * as GAME from "../constants/game.js"

export const assets = new Map();

export async function loadAssets(switchScreens, assetLoaded){
    await load(ASSET_LIST, assetLoaded)
    .catch((error) => {
        console.error(`Error: Unable to load asset "${error.fileName}"`);
    })
    .then(() => {
        console.log(`Asset loading complete. A total of ${assets.size} assets have been loaded.`);
        switchScreens(GAME.STATES.MAINMENU);
    });
}

export async function load(assetArray, onComplete){
    const promises = assetArray.map(([key, fileName]) => {
        const extension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
        const type = ASSET_TYPE_LOOKUP[extension];

        if(type === ASSET_TYPE.IMAGE)
            return loadImage(key, fileName, onComplete);
        else if (type === ASSET_TYPE.SOUND)
            return loadSound(key, fileName, onComplete);
        else
            throw new TypeError('Error unknown type');
    });

    return Promise.all(promises).then(loadedAssets => {
        for(const { key, asset } of loadedAssets){
            assets.set(key, asset);
        }
    });
}

function loadImage(key, fileName, onComplete){
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.addEventListener('load', () => {
            resolve({ key, asset: image });

            if(typeof onComplete === 'function')
                onComplete({ fileName, image });
        }, { once: true });
        
        image.addEventListener('error', event => reject({ fileName, event }));

        image.src = fileName;
    });
}

function loadSound(key, fileName, onComplete){
    return new Promise((resolve, reject) => {
        const sound = new Audio();

        sound.addEventListener('canplay', () => {
            resolve({ key, asset: sound });

            if(typeof onComplete === 'function')
                onComplete({ fileName, sound });
        }, { once: true });

        sound.addEventListener('error', event => reject({ fileName, event }));

        sound.src = fileName;
    });
}
