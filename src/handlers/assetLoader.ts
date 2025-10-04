import * as ASSETS from "../constants/assets.js";

export class AssetLoader {
  constructor() {}
  async load(assetLoaded: Function) {
    type Asset = {
      key: string;
      asset: HTMLImageElement | HTMLAudioElement;
    };

    const promises: Promise<Asset>[] = ASSETS.NAMES.map(([key, fileName]) => {
      const { asset, eventType } = this.findAssetType(fileName);

      return new Promise<Asset>((resolve, reject) => {
        asset.addEventListener(
          eventType,
          () => {
            resolve({ key, asset: asset });
            assetLoaded();
          },
          { once: true }
        );

        asset.addEventListener("error", (event) => reject({ fileName, event }));

        asset.src = fileName;
      });
    });

    return Promise.all(promises).then((loadedAssets) => {
      for (const { key, asset } of loadedAssets) {
        ASSETS.ALL_ASSETS.set(key, asset);
      }
      console.log(`${ASSETS.ALL_ASSETS.size} assets have been loaded.`);
    });
  }

  findAssetType(fileName: string) {
    const extension: string = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
    const type: string = ASSETS.CHECKER[extension];

    let asset: HTMLImageElement | HTMLAudioElement;
    let eventType: string;

    if (type === ASSETS.TYPES.IMAGE) {
      asset = new Image();
      eventType = "load";
    } else if (type === ASSETS.TYPES.SOUND) {
      asset = new Audio();
      eventType = "canplay";
    } else {
      throw new TypeError("Error unknown type");
    }

    return { asset, eventType };
  }

  getAssetFileNameLength(): number {
    return ASSETS.NAMES.length;
  }
}
