import { ASSET_LIST, ALL_ASSETS } from "../constants/assets.js";

export const assetListLength: number = ASSET_LIST.length;

export const ASSET_TYPE: { IMAGE: string; SOUND: string } = {
  IMAGE: "image",
  SOUND: "sound",
};

export const ASSET_TYPE_LOOKUP: Record<string, string> = {
  png: ASSET_TYPE.IMAGE,
  mp3: ASSET_TYPE.SOUND,
  ogg: ASSET_TYPE.SOUND,
};

type Asset = {
  key: string;
  asset: HTMLImageElement | HTMLAudioElement;
};

export async function load(assetLoaded: Function) {
  const promises: Promise<Asset>[] = ASSET_LIST.map(([key, fileName]) => {
    const extension: string = fileName
      // const extension: keyof typeof ASSETS.ASSET_TYPE_LOOKUP = fileName
      .substring(fileName.lastIndexOf(".") + 1)
      .toLowerCase();

    const type: string = ASSET_TYPE_LOOKUP[extension];

    if (type === ASSET_TYPE.IMAGE) {
      return loadImage(key, fileName.toString(), assetLoaded);
    } else if (type === ASSET_TYPE.SOUND) {
      return loadSound(key, fileName.toString(), assetLoaded);
    } else {
      throw new TypeError("Error unknown type");
    }
  });

  return Promise.all(promises).then((loadedAssets) => {
    for (const { key, asset } of loadedAssets) {
      ALL_ASSETS.set(key, asset);
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
