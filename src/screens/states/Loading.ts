import { StatusBar } from "../../GUI/components/StatusBar.js";
import { AssetLoader } from "../../handlers/assetLoader.js";
import { IScreenState, Screen } from "../Screen.js";

export class Loading implements IScreenState {
  private assetLoader = new AssetLoader();
  private loadingBar = new StatusBar()
    .setPosition({ x: 100, y: 100 })
    .setDimensions(40, 5)
    .setStatus(0, this.assetLoader.getAwaitingAssetsSize())
    .setDrawOffsets(0);

  private loadingBar2 = new StatusBar()
    .setPosition({ x: 400, y: 200 })
    .setDimensions(400, 10)
    .setStatus(50, 100)
    .setDrawOffsets(0);

  constructor(public screen: Screen) {
    this.assetLoader
      .load(this.assetLoaded)
      .catch((error) => console.error(`Error: "${error.fileName}"`))
      .then(() => console.log("this.screen.beginScreen()"));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.loadingBar.draw(ctx);
    this.loadingBar2.draw(ctx);
  }

  update(): void {}

  assetLoaded = (): void => this.loadingBar.increaseStatusBar(1);
}
