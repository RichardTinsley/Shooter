import { ALL_ASSETS, ASSET_LIST } from "../../constants/assets.js";
import { StatusBar } from "../../GUI/components/StatusBar.js";
import { AssetLoader } from "../../handlers/assetLoader.js";
import { IScreenState } from "../Screen.js";
import { Screen } from "../Screen.js";

export class Loading implements IScreenState {
  private assetLoader = new AssetLoader();
  private loadingBar = new StatusBar()
    .setPosition({ x: 100, y: 100 })
    .setDimensions(50, 10)
    .setStatus(30, 40)
    .setDrawOffsets(0);

  constructor(public screen: Screen) {
    this.assetLoader
      .load(this.assetLoaded)
      .catch((error) => console.error(`Error: "${error.fileName}"`))
      .then(() => console.log(`${ALL_ASSETS.size} assets have been loaded.`));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.loadingBar.draw(ctx);
  }

  update(): void {}

  assetLoaded = (numberOfAssets: number): void => {
    // this.loadingBar.setCurrentStatus(1);
    // if (this.loadingBar.getCurrentStatus() === numberOfAssets) this.screen.beginScreen();
  };
}
