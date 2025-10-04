import {
  ASSET_FILENAMES,
  ASSETS,
  Asset,
  ASSET_TYPE,
  ASSET_TYPE_LOOKUP,
} from "../constants/assets.js";

export class AssetLoader {
  constructor() {}
  async load(assetLoaded: Function) {
    const promises: Promise<Asset>[] = ASSET_FILENAMES.map(([key, fileName]) => {
      const { asset, eventType } = this.findAssetType(fileName);

      return new Promise<Asset>((resolve, reject) => {
        asset.addEventListener(
          eventType,
          () => {
            resolve({ key, asset: asset });
            assetLoaded();
            console.log(`${fileName} Loaded.`);
          },
          { once: true }
        );

        asset.addEventListener("error", (event) => reject({ fileName, event }));

        asset.src = fileName;
      });
    });

    return Promise.all(promises).then((loadedAssets) => {
      for (const { key, asset } of loadedAssets) {
        ASSETS.set(key, asset);
      }
      console.log(`${ASSETS.size} assets have been loaded.`);
    });
  }

  findAssetType(fileName: string) {
    const extension: string = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
    const type: string = ASSET_TYPE_LOOKUP[extension];

    let asset: HTMLImageElement | HTMLAudioElement;
    let eventType: string;

    if (type === ASSET_TYPE.IMAGE) {
      asset = new Image();
      eventType = "load";
    } else if (type === ASSET_TYPE.SOUND) {
      asset = new Audio();
      eventType = "canplay";
    } else {
      throw new TypeError("Error unknown type");
    }

    return { asset, eventType };
  }

  getAssetFileNameLength(): number {
    return ASSET_FILENAMES.length;
  }
}
