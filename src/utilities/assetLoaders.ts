import * as ASSETS from "../constants/assets.js";

export const assets = new Map();
export const assetListLength: number = ASSETS.ASSET_LIST.length;

type Asset = {
  key: string;
  asset: HTMLImageElement | HTMLAudioElement;
};

export async function load(assetLoaded: Function) {
  const promises: Promise<Asset>[] = ASSETS.ASSET_LIST.map(
    ([key, fileName]) => {
      const extension: string = fileName
        // const extension: keyof typeof ASSETS.ASSET_TYPE_LOOKUP = fileName
        .substring(fileName.lastIndexOf(".") + 1)
        .toLowerCase();

      const type: string = ASSETS.ASSET_TYPE_LOOKUP[extension];

      if (type === ASSETS.ASSET_TYPE.IMAGE) {
        return loadImage(key, fileName.toString(), assetLoaded);
      } else if (type === ASSETS.ASSET_TYPE.SOUND) {
        return loadSound(key, fileName.toString(), assetLoaded);
      } else {
        throw new TypeError("Error unknown type");
      }
    }
  );

  return Promise.all(promises).then((loadedAssets) => {
    for (const { key, asset } of loadedAssets) {
      assets.set(key, asset);
    }
  });
}

function loadImage(key: string, fileName: string, assetLoaded: Function) {
  return new Promise<Asset>((resolve, reject) => {
    const image: HTMLImageElement = new Image();

    image.addEventListener(
      "load",
      () => {
        resolve({ key, asset: image });
        if (typeof assetLoaded === "function") assetLoaded({ fileName, image });
      },
      { once: true }
    );

    image.addEventListener("error", (event) => reject({ fileName, event }));

    image.src = fileName;
  });
}

function loadSound(key: string, fileName: string, assetLoaded: Function) {
  return new Promise<Asset>((resolve, reject) => {
    const sound: HTMLAudioElement = new Audio();

    sound.addEventListener(
      "canplay",
      () => {
        resolve({ key, asset: sound });
        if (typeof assetLoaded === "function") assetLoaded({ fileName, sound });
      },
      { once: true }
    );

    sound.addEventListener("error", (event) => reject({ fileName, event }));

    sound.src = fileName;
  });
}
