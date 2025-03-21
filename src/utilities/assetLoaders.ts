import * as ASSETS from "../constants/assets.js";

export const assets = new Map();
export const assetListLength: number = ASSETS.ASSET_LIST.length;

export async function loadAssets(
  switchScreens: Function,
  assetLoaded: Function
) {
  await load(ASSETS.ASSET_LIST, assetLoaded)
    .catch((error) => {
      console.error(`Error: Unable to load asset "${error.fileName}"`);
    })
    .then(() => {
      console.log(
        `Asset loading complete. A total of ${assets.size} assets have been loaded.`
      );
      // switchScreens(GAME.STATES.MAINMENU);
    });
}

async function load(assetArray: string[][], onComplete: Function) {
  const promises: Promise<unknown>[] = assetArray.map(([key, fileName]) => {
    // const extension: string = fileName
    const extension: keyof typeof ASSETS.ASSET_TYPE_LOOKUP = fileName
      .substring(fileName.lastIndexOf(".") + 1)
      .toLowerCase();

    const type: string = ASSETS.ASSET_TYPE_LOOKUP[extension];

    if (type === ASSETS.ASSET_TYPE.IMAGE) {
      return loadImage(key, fileName.toString(), onComplete);
    } else if (type === ASSETS.ASSET_TYPE.SOUND) {
      return loadSound(key, String(fileName), onComplete);
    } else {
      throw new TypeError("Error unknown type");
    }
  });

  return Promise.all(promises).then((loadedAssets) => {
    for (const assetT of loadedAssets) {
      console.log(assetT);
    }
    // for (const { key, asset } of loadedAssets) {
    //   assets.set(key, asset);
    // }
  });
}

function loadImage(key: string, fileName: string, onComplete: Function) {
  return new Promise((resolve, reject) => {
    const image: HTMLImageElement = new Image();

    image.addEventListener(
      "load",
      () => {
        resolve({ key, asset: image });
        if (typeof onComplete === "function") onComplete({ fileName, image });
      },
      { once: true }
    );

    image.addEventListener("error", (event) => {
      reject({ fileName, event });
      console.log("OMGFAIL");
    });

    image.src = fileName;
  });
}

function loadSound(key: String, fileName: string, onComplete: Function) {
  return new Promise((resolve, reject) => {
    const sound: HTMLAudioElement = new Audio();

    sound.addEventListener(
      "canplay",
      () => {
        resolve({ key, asset: sound });
        if (typeof onComplete === "function") onComplete({ fileName, sound });
      },
      { once: true }
    );

    sound.addEventListener("error", (event) => reject({ fileName, event }));

    sound.src = fileName;
  });
}
