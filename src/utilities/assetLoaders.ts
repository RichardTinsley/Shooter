import { ASSET_LIST, ALL_ASSETS } from "../constants/assets.js";
export const assetListLength: number = ASSET_LIST.length;

const ASSET_TYPE: { IMAGE: string; SOUND: string } = {
  IMAGE: "image",
  SOUND: "sound",
};

const ASSET_TYPE_LOOKUP: Record<string, string> = {
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
    const { newAsset, eventListenerType } = findAssetType(fileName);

    return new Promise<Asset>((resolve, reject) => {
      newAsset.addEventListener(
        eventListenerType,
        () => {
          resolve({ key, asset: newAsset });
          assetLoaded({ fileName, newAsset });
        },
        { once: true }
      );

      newAsset.addEventListener("error", (event) =>
        reject({ fileName, event })
      );

      newAsset.src = fileName;
    });
  });

  return Promise.all(promises).then((loadedAssets) => {
    for (const { key, asset } of loadedAssets) {
      ALL_ASSETS.set(key, asset);
    }
  });
}

function findAssetType(fileName: string) {
  const extension: string = fileName
    .substring(fileName.lastIndexOf(".") + 1)
    .toLowerCase();

  const type: string = ASSET_TYPE_LOOKUP[extension];

  let newAsset: HTMLImageElement | HTMLAudioElement;
  let eventListenerType: string;

  if (type === ASSET_TYPE.IMAGE) {
    newAsset = new Image();
    eventListenerType = "load";
  } else if (type === ASSET_TYPE.SOUND) {
    newAsset = new Audio();
    eventListenerType = "canplay";
  } else {
    throw new TypeError("Error unknown type");
  }

  return { newAsset, eventListenerType };
}
