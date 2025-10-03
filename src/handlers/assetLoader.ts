import {
  ASSET_LIST,
  ALL_ASSETS,
  Asset,
  ASSET_TYPE,
  ASSET_TYPE_LOOKUP,
} from "../constants/assets.js";

export class AssetLoader {
  constructor() {}
  async load(assetLoaded: Function) {
    const promises: Promise<Asset>[] = ASSET_LIST.map(([key, fileName]) => {
      const { newAsset, eventListenerType } = this.findAssetType(fileName);

      return new Promise<Asset>((resolve, reject) => {
        newAsset.addEventListener(
          eventListenerType,
          () => {
            resolve({ key, asset: newAsset });
            assetLoaded(ASSET_LIST.length);
            console.log(`${fileName} Loaded.`);
          },
          { once: true }
        );

        newAsset.addEventListener("error", (event) => reject({ fileName, event }));

        newAsset.src = fileName;
      });
    });

    return Promise.all(promises).then((loadedAssets) => {
      for (const { key, asset } of loadedAssets) {
        ALL_ASSETS.set(key, asset);
      }
      console.log(`${ALL_ASSETS.size} assets have been loaded.`);
    });
  }

  findAssetType(fileName: string) {
    const extension: string = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();

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

  getAwaitingAssetsSize(): number {
    return ASSET_LIST.length;
  }
}
