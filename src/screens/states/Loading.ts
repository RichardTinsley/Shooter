import { StatusBar } from "../../GUI/components/StatusBar.js";
import { AssetLoader } from "../../handlers/assetLoader.js";
import { IScreenState, Screen } from "../Screen.js";

export class Loading implements IScreenState {
  private assetLoader = new AssetLoader();
  private loadingBar = new StatusBar()
    .setPositionPointer({ x: 100, y: 100 })
    .setSizePointer({ width: 40, height: 5 })
    .setStatus(0, this.assetLoader.getAwaitingAssetsSize())
    .initialise();

  private loadingBar2 = new StatusBar()
    .setPositionPointer({ x: 400, y: 200 })
    .setSizePointer({ width: 400, height: 10 })
    .setStatus(50, 100)
    .initialise();

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

  update(): void {
    this.loadingBar.update();
  }

  assetLoaded = (): void => this.loadingBar.increaseStatusBar(1);
}
